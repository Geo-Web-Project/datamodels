# Geo Web Content Layer

The Geo Web Content Layer is build on top of the [Ceramic](https://ceramic.network) and the [IDX](https://github.com/ceramicnetwork/CIP/blob/main/CIPs/CIP-11/CIP-11.md) protocols. In order to understand how content is anchored in the Geo Web, it is critical to understand how these protocols work.

The root of all content anchored to a parcel is an [IDX index](https://developers.ceramic.network/tools/glaze/did-datastore/). The "user" in this case is **not** the owner but the land parcel itself. Using the [NFT DID Method](https://github.com/ceramicnetwork/CIP/blob/main/CIPs/CIP-94/CIP-94.md), the _index_ is owned by the land parcel and controlled by whoever the current owner is. This means any content added or changed by the current owner will stay anchored to the parcel in the event of a sale.

![](https://developers.ceramic.network/images/idx-architecture.png)
From [Ceramic Docs](https://developers.ceramic.network/tools/glaze/did-datastore/#design)

This project defines the _definitions_ and _schemas_ used in the Geo Web.

## Definitions

[Definitions](https://developers.ceramic.network/tools/glaze/did-datastore/#definitions) are streams that store the metadata for the keys at the index of a land parcel.

| Name           | Alias        | Description                                              | Source                                                     |
| -------------- | ------------ | -------------------------------------------------------- | ---------------------------------------------------------- |
| [Basic Profile](./definitions/BasicProfile.md)  | basicProfile | Contains a DID's basic profile information               | [@datamodels](https://github.com/ceramicstudio/datamodels) |
| [Geo Web Pinset](./definitions/GeoWebPinset.md) | geoWebPinset | Pinset of IPFS objects anchored to a Geo Web land parcel | Custom                                                     |
| [Media Gallery](./definitions/MediaGallery.md)  | mediaGallery | A gallery of media objects                               | Custom                                                     |

## Schemas

[Schemas](https://developers.ceramic.network/tools/glaze/did-datastore/#schemas) are [JSON schemas](https://json-schema.org) of _records_ and other streams created in the Geo Web.

| Title        | Description                                                            | Source                                                     |
| ------------ | ---------------------------------------------------------------------- | ---------------------------------------------------------- |
| [BasicProfile](./schemas/BasicProfile.md) | Contains a DID's basic profile information                             | [@datamodels](https://github.com/ceramicstudio/datamodels) |
| [Pinset](./schemas/Pinset.md)       | A simple schema for storing a CID that represents the root of a pinset | Custom                                                     |
| [MediaGallery](./schemas/MediaGallery.md) | A gallery of media objects                                             | Custom                                                     |
| [MediaObject](./schemas/MediaObject.md)  | A media object, such as an image, video, audio, or 3D model            | Schema.org                                                 |
