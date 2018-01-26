import React, { Component } from "react";
import PropTypes from "prop-types";
import Photo from "./presenter";

class Container extends Component {
    render(){
        console.log(this.props)
        return <Photo {...this.props}/>;
    }
}

export default Container;