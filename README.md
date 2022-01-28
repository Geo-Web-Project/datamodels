# Geo Web Data Models

This project contains the [Ceramic data models](https://developers.ceramic.network/tools/glaze/datamodel/) to be used in the Geo Web.

Referred to as the "content layer" of the Geo Web, these data models contain schemas and definitions that define how content is anchored to a land parcel. This project also contains semantics and examples of how browsers can attach content, as well as a registry of which browsers support what content.

## Install

```
yarn add @geo-web/datamodels
```

```
npm install @geo-web/datamodels
```

## Usage

This package can be used with [DIDDataStore](https://developers.ceramic.network/tools/glaze/did-datastore/#did-datastore).

```js
import GeoWebModel from "@geo-web/datamodels";
import { DataModel } from "@glazed/datamodel";
import { DIDDataStore } from "@glazed/did-datastore";

const model = new DataModel({ ceramic, model: GeoWebModel });
const dataStore = new DIDDataStore({ ceramic, model });
```

## [Documentation](./docs/README.md)

## Contribute

Contributions are welcome! These may include, but not limited to:

- Creating new custom schemas and definitions
- Adding schemas from Schema.org
- Creating new semantics on existing schemas and definitions
- Adding browser support status
- Adding examples

Are you developing a browser? Get in touch in the Geo Web [Discord](https://discord.gg/reXgPru7ck).
