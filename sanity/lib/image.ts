import createImageUrlBuilder from "@sanity/image-url";

import { dataset, projectId } from "../env";
import { Image } from "sanity";

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({ projectId, dataset });

export const urlForImage = (source: Image) => {
  return builder?.image(source).auto("format").fit("max").url();
};
