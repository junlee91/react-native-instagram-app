import React, { Component } from "react";
import FeedScreen from "./presenter";

class Container extends Component {
  render() {
    return <FeedScreen {...this.props} />;
  }
}

export default Container;
