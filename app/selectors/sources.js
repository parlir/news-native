import { denormalize } from "normalizr";
import { createSelector } from "reselect";

import { sources, source } from "../constants/Schemas";
import { getEntities, getMeta, getIdentifier } from "./common";

export const getSourceIds = createSelector([getMeta], meta => meta.sources);

export const getSources = createSelector(
  [getSourceIds, getEntities],
  (ids, entities) => denormalize(ids, sources, entities)
);

export const getSource = createSelector(
  [getIdentifier, getEntities],
  (id, entities) => denormalize(id, source, entities)
);
