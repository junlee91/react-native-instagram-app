import React, { Component } from "react";
import PropTypes from "prop-types";
import PhotoScreen from "./presenter";

class Container extends Component {
  state = {
    isFetching: false
  };

  _update = id => {
    const { getPhoto } = this.props;
    this.setState({
      id: id
    });
    getPhoto(id);
  };

  _refresh = () => {
    const { getPhoto } = this.props;
    const { id } = this.state;
    this.setState({
      isFetching: true
    });

    getPhoto(id);
  };

  componentDidMount = async () => {
    const { navigation: { state: { params: { id } } } } = this.props;
    this._update(id);
  };

  componentWillReceiveProps = nextProps => {
    if (nextProps.photoDetail) {
      this.setState({
        isFetching: false
      });
    }
  };

  render() {
    const { photoDetail } = this.props;
    //console.log(this.props);
    if(photoDetail)
      return <PhotoScreen {...this.props} {...this.state} refresh={this._refresh}/>;
    else
      return null;
  }
}

export default Container;
