// Source actions
import { normalize } from "normalizr";

import { sources } from "../constants/Schemas";
import { callApi } from "../utilities/ApiUtilities";
import { API_RETRIEVE_SOURCES } from "../constants/ApiConstants";
import types from "../constants/ActionConstants";

export function retrieveSources() {
  return async dispatch => {
    const response = await callApi(API_RETRIEVE_SOURCES);
    const normalized = normalize(response.sources, sources);
    dispatch({
      type: types.SET_ENTITIES,
      entities: normalized.entities
    });
    dispatch({
      type: types.SET_META_DATA,
      data: {
        sources: normalized.result
      }
    });
  };
}
