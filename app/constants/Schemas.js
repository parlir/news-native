import { schema } from "normalizr";

export const source = new schema.Entity("source");
export const sources = new schema.Array(source);

export const article = new schema.Entity("article", {}, { idAttribute: "url" });
export const articles = new schema.Array(article);
