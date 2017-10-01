// Article actions
import { normalize } from "normalizr";

import { articles } from "../constants/Schemas";
import { callApi } from "../utilities/ApiUtilities";
import { API_RETRIEVE_ARTICLES } from "../constants/ApiConstants";
import types from "../constants/ActionConstants";

export function retrieveArticles(source) {
  return async (dispatch, getStore) => {
    const store = await getStore();
    const response = await callApi(
      API_RETRIEVE_ARTICLES.replace(":source", source)
    );

    const normalized = normalize(response.articles, articles);
    dispatch({
      type: types.SET_ENTITIES,
      entities: normalized.entities
    });
    const articleMap = {};
    articleMap[source] = normalized.result;
    dispatch({
      type: types.SET_META_DATA,
      data: {
        articles: articleMap
      }
    });
  };
}
