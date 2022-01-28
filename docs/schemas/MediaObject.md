# MediaObject
A media object, such as an image, video, audio, or 3D model. This schema comes from [Schema.org](https://schema.org/MediaObject).

| Property         | Description                                                                                         | Value                | Required                              | Example |
| ---------------- | --------------------------------------------------------------------------------------------------- | -------------------- | ------------------------------------- | ------- |
| `@type`          | Used to set the data type of a node or typed value.                                                 | string               | 3DModel                               |         |
| `name`           | The name of the item.                                                                               | string               | Astronaut                             |         |
| `contentUrl`     | URL to the actual bytes of the file. Use this field if only one encoding is available.                         | URI string           | (ipfs://, ipns://, http://, https://) |         |
| `contentSize`    | File size in bytes.                                                                                 | string               | 1024                                  |         |
| `encodingFormat` | Media type typically expressed using a MIME format.                                                 | string               | model/gltf-binary                     |         |
| `encoding`       | A media object that encodes this MediaObject. Can be used to link multiple encodings to one object. | array of MediaObject | [...]                                 |         |

## Usage
A `MediaObject` can be several different types and encodings. See below for the supported types.

A single `MediaObject` can have one or more encodings. These encodings can be different formats or sizes of the same media. When using multiple encodings, the `encoding` property should contain an array of references to other `MediaObject`s, one for each encoding. If there is only a single encoding, the `contentUrl` property can be used.

## Browser Support
| Property         | [Geo Web Cadastre](https://github.com/Geo-Web-Project/cadastre) | [GeoWeb.app](https://geoweb.app) |
| ---------------- | --------------------------------------------------------------- | -------------------------------- |
| `@type`          | ✅                                                              | ❌                               |
| `name`           | ✅                                                              | ✅                               |
| `contentUrl`     | ✅                                                              | ✅                               |
| `contentSize`    | ❌                                                              | ❌                               |
| `encodingFormat` | ✅                                                              | ❌                               |
| `encoding`       | ❌                                                              | ❌                                 |

| Type          | Encoding             | [Geo Web Cadastre](https://github.com/Geo-Web-Project/cadastre) | [GeoWeb.app](https://geoweb.app) |
| ------------- | -------------------- | --------------------------------------------------------------- | -------------------------------- |
| `3DModel`     | `model/gltf-binary`  | ✅                                                              | ✅                               |
| `3DModel`     | `model/vnd.usdz+zip` | ✅                                                              | ❌                               |
| `ImageObject` | `image/gif`          | ✅                                                              | ❌                               |
| `ImageObject` | `image/jpeg`         | ✅                                                              | ❌                               |
| `ImageObject` | `image/png`          | ✅                                                              | ❌                               |
| `ImageObject` | `image/svg+xml`      | ✅                                                              | ❌                               |
| `AudioObject` | `audio/mpeg`         | ✅                                                              | ❌                               |
| `AudioObject` | `audio/mp4`          | ✅                                                              | ❌                               |
| `VideoObject` | `video/mpeg`         | ✅                                                              | ❌                               |
| `VideoObject` | `video/mp4`          | ✅                                                              | ❌                                 |

## Other Properties
These properties exist in the schema, but are not currently supported by any browsers.

See [Schema.org](https://schema.org/MediaObject).