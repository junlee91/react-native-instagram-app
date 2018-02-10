import React, { Component } from "react";
import PropTypes from "prop-types";
import LikesScreen from "./presenter";

class Container extends Component {
 
  state = {
    isFetching: false
  };

  // componentWillReceiveProps = nextProps => {
  //   if (nextProps.notifications) {
  //     this.setState({
  //       isFetching: false
  //     });
  //   }
  // };

  render() {
    return (
      <LikesScreen
        {...this.props}
        {...this.state}
        refresh={this._refresh}
      />
    );
  }
  _refresh = () => {
    this.setState({
      isFetching: true
    });
  };
}

export default Container;