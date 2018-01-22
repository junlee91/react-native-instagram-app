import React, { Component } from "react";
import { Alert } from "react-native";
import LoginScreen from "./presenter";

class Container extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  state = {
    username: "",
    password: "",
    isSubmitting: false
  };

  render() {
    return (
      <LoginScreen
        {...this.state}
        changeUsername={this._changeUsername}
        changePassword={this._changePassword}
        submit={this._submit}
      />
    );
  }

  _changeUsername = text => {
    this.setState({ username: text });
  };

  _changePassword = text => {
    this.setState({ password: text });
  };

  _submit = async () => {
    const { username, password, isSubmitting } = this.state;
    const { login } = this.props;
    if (!isSubmitting) {
      if (username && password) {
        // Submit
        this.setState({
          isSubmitting: true
        });

        // redux action
        const loginResult = await login(username, password);
        if (!loginResult) {
          Alert.alert("Something went wrong, try again");
          this.setState({
            isSubmitting: false
          });
        }
      } else {
        Alert.alert("All fields are required");
      }
    }
  };
}

export default Container;
