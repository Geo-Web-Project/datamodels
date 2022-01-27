import { readFile, writeFile } from "node:fs/promises";
import { CeramicClient } from "@ceramicnetwork/http-client";
import { ModelManager } from "@glazed/devtools";

if (!process.env.CERAMIC_HOST) {
  throw new Error("Missing CERAMIC_HOST environment variable");
}

// Connect to the Ceramic node
const ceramic = new CeramicClient(process.env.CERAMIC_HOST);

// Load and create a manager for the model
const bytes = await readFile(new URL("model.json", import.meta.url));
const manager = ModelManager.fromJSON(ceramic, JSON.parse(bytes.toString()));

// Write model to JSON file
const model = await manager.toPublished();
await writeFile(
  new URL("../src/model.json", import.meta.url),
  JSON.stringify(model)
);

console.log("Model written to src/model.json file:", model);
