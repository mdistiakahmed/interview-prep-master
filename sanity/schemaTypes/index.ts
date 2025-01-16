import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { sysdesignType } from "./sysdesignType";
import { algoType } from "./algoType";
import { javaType } from "./javaType";
import { reactType } from "./reactType";
import { javascriptType } from "./javascriptType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    sysdesignType,
    algoType,
    javaType,
    reactType,
    javascriptType,
  ],
};
