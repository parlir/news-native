import types from "../constants/ActionConstants";
import merge from "lodash/merge";

export default function meta(
  state = {
    sources: [],
    articles: {},
    isLoading: false
  },
  action
) {
  switch (action.type) {
    case types.SET_META_DATA:
      return merge({}, state, action.data);
    default:
      return state;
  }
}
