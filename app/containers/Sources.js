import React from "react";
import { connect } from "react-redux";

import { retrieveSources } from "../actions/sources";
import { getSources } from "../selectors/sources";
import AsyncLoad from "../hoc/AsyncLoad";
import Sources from "../components/Sources";

const mapStateToProps = state => ({
  sources: getSources(state)
});

const mapDispatchToProps = dispatch => ({
  getSources() {
    dispatch(retrieveSources());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(
  AsyncLoad(Sources, props => props.getSources())
);
