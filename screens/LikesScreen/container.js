import React, { Component } from "react";
import PropTypes from "prop-types";
import LikesScreen from "./presenter";

class Container extends Component {
  static propTypes = {
    notifications: PropTypes.array,
    getNotifications: PropTypes.func.isRequired
  };
  state = {
    isFetching: false
  };
  componentWillReceiveProps = nextProps => {
    if (nextProps.notifications) {
      this.setState({
        isFetching: false
      });
    }
  };

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
    const { getNotifications } = this.props;
    this.setState({
      isFetching: true
    });
    getNotifications();
  };
}

export default Container;