// Common selectors

export const getEntities = state => state.entities;
export const getMeta = state => state.meta;
export const getIdentifier = (state, props) =>
  props.navigation.state.params.identifier;
