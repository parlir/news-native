import { denormalize } from "normalizr";
import { createSelector } from "reselect";

import { articles } from "../constants/Schemas";
import { getEntities, getMeta, getIdentifier } from "./common";

export const articleMeta = createSelector([getMeta], meta => meta.articles);

export const getArticleIds = createSelector(
  [articleMeta, getIdentifier],
  (meta, source) => (meta[source] ? meta[source] : [])
);

export const getArticles = createSelector(
  [getArticleIds, getEntities],
  (ids, entities) => denormalize(ids, articles, entities).reverse()
);
