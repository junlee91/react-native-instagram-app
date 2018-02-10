import React, { Component } from "react";
import { View, Text } from "react-native";

class CommentsScreen extends Component {

    render() {
    const { navigation: { state: { params: { comments } } } } = this.props;
    console.log(comments);
    return <Text>CommentsScreen</Text>;
  }
}

export default CommentsScreen;
