import type { ModelTypeAliases, ModelTypesToAliases } from "@glazed/types";
import { BasicProfile } from "@datamodels/identity-profile-basic";
import { MediaGallery } from "../types/MediaGallery";
import { Pinset } from "../types/Pinset";
import { MediaObject } from "schema-org-ceramic/types/MediaObject.schema";
import * as allModels from "./model.json";

export type { BasicProfile } from "@datamodels/identity-profile-basic";
export type { MediaGallery } from "../types/MediaGallery";
export type { Pinset } from "../types/Pinset";

export type ModelTypes = ModelTypeAliases<
  {
    BasicProfile: BasicProfile;
    MediaGallery: MediaGallery;
    Pinset: Pinset;
    MediaObject: MediaObject;
  },
  {
    basicProfile: "BasicProfile";
    mediaGallery: "MediaGallery";
    geoWebPinset: "Pinset";
  }
>;

export const model: ModelTypesToAliases<ModelTypes> = allModels;
