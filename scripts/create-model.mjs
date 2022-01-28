import { readFile, writeFile } from "node:fs/promises";
import { CeramicClient } from "@ceramicnetwork/http-client";
import { ModelManager } from "@glazed/devtools";
import { DID } from "dids";
import { Ed25519Provider } from "key-did-provider-ed25519";
import { getResolver } from "key-did-resolver";
import { fromString } from "uint8arrays";
import { createModel } from "schema-org-ceramic";
import fs from "fs";
import { TileDocument } from "@ceramicnetwork/stream-tile";
import jsonpatch from "fast-json-patch";
import { models } from "../schemas/datamodels.mjs";

if (!process.env.SEED) {
  throw new Error("Missing SEED environment variable");
}

if (!process.env.CERAMIC_HOST) {
  throw new Error("Missing CERAMIC_HOST environment variable");
}

// The seed must be provided as an environment variable
const seed = fromString(process.env.SEED, "base16");
// Create and authenticate the DID
const did = new DID({
  provider: new Ed25519Provider(seed),
  resolver: getResolver(),
});
await did.authenticate();

// Connect to the local Ceramic node
const ceramic = new CeramicClient(process.env.CERAMIC_HOST);
ceramic.did = did;

// Create a manager for the model
const manager = new ModelManager(ceramic);

// Load existing model
try {
  const existingModel = JSON.parse(
    await readFile(new URL("model.json", import.meta.url))
  );

  manager.addJSONModel(existingModel);
} catch (err) {}

// Load schema.org schemas
const schemaOrgClasses = JSON.parse(
  await readFile(new URL("../schemas/schema-org.json", import.meta.url))
)["classes"];

for (let i = 0; i < schemaOrgClasses.length; i++) {
  const className = schemaOrgClasses[i];
  await createModel(ceramic, manager, className);
}

// Load custom schemas
const schemasDir = "../schemas/custom";
const schemasPath = new URL(schemasDir, import.meta.url);

for (const schemaFile of fs.readdirSync(schemasPath)) {
  const schema = JSON.parse(
    await readFile(new URL(`${schemasDir}/${schemaFile}`, import.meta.url))
  );
  let schemaId = manager.getSchemaID(schema.title);
  if (!schemaId) {
    schemaId = await manager.createSchema(schema.title, schema);
    console.log(`Created schema ${schema.title} -> ${schemaId}`);
  } else {
    const doc = await TileDocument.load(ceramic, schemaId);
    const patch = jsonpatch.compare(doc.content, schema);

    if (patch.length > 0) {
      doc.update(schema);
      console.log(`Updated schema ${schema.title} -> ${schemaId}`);
    } else {
      console.log(
        `No changes detected for schema ${schema.title} -> ${schemaId}`
      );
    }
  }
}

// Load @datamodels
models.forEach((model) => {
  manager.addJSONModel(model);
});

// Write model to JSON file
await writeFile(
  new URL("model.json", import.meta.url),
  JSON.stringify(manager.toJSON())
);
console.log("Encoded model written to scripts/model.json file");
