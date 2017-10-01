import React, { Component } from "react";

export default function AsyncLoad(UserComponent, callback) {
  return class extends Component {
    componentDidMount() {
      callback(this.props);
    }
    render() {
      return <UserComponent {...this.props} />;
    }
  };
}
