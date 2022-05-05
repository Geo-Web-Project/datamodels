import type { ModelTypeAliases } from "@glazed/types";
import { BasicProfile } from "@datamodels/identity-profile-basic";
import { MediaGallery } from "../types/MediaGallery";
import { Pinset } from "../types/Pinset";
import * as allModels from "./model.json";

export type { BasicProfile } from "@datamodels/identity-profile-basic";
export type { MediaGallery } from "../types/MediaGallery";
export type { Pinset } from "../types/Pinset";

export type ModelTypes = ModelTypeAliases<
  {
    BasicProfile: BasicProfile;
    MediaGallery: MediaGallery;
    GeoWebPinset: Pinset;
  },
  {
    basicProfile: "BasicProfile";
    mediaGallery: "MediaGallery";
    geoWebPinset: "GeoWebPinset";
  }
>;

export const model = allModels;
