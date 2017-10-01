import React from "react";
import { connect } from "react-redux";

import { retrieveArticles } from "../actions/articles";
import { getArticles } from "../selectors/articles";
import { getSource } from "../selectors/sources";
import AsyncLoad from "../hoc/AsyncLoad";
import Articles from "../components/Articles";

const mapStateToProps = (state, props) => ({
  source: getSource(state, props),
  articles: getArticles(state, props)
});

const mapDispatchToProps = (dispatch, props) => ({
  getArticles() {
    dispatch(retrieveArticles(props.navigation.state.params.identifier));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(
  AsyncLoad(Articles, props => props.getArticles())
);
