import types from "../constants/ActionConstants.js";
import merge from "lodash/merge";

export default function entities(
  state = {
    source: {},
    article: {}
  },
  action
) {
  switch (action.type) {
    case types.SET_ENTITIES:
      return merge({}, state, action.entities);
    default:
      return state;
  }
}
