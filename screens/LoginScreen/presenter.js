import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const LoginScreen = props => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Image
        source={require("../../assets/images/logo_white.png")}
        resizeMode="stretch"
        style={styles.logo}
      />
    </View>
    <View style={styles.content}>
      <TextInput
        placeholder={"Username"}
        style={styles.textInput}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput
        placeholder={"Password"}
        style={styles.textInput}
        autoCapitalize="none"
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.touchable}>
        <View style={styles.button}>
          <Text style={styles.btnText}>Login</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.fbContainer}>
        <View style={styles.fbView}>
          <Ionicons name="logo-facebook" size={22} color="#3E99EE" />
          <Text style={styles.fbText}>Login with Facebook</Text>
        </View>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flex: 1,
    backgroundColor: "#4E65B4",
    alignItems: "center",
    justifyContent: "center",
    width
  },
  logo: {
    width: 180,
    height: 80,
    marginTop: 30
  },
  content: {
    flex: 4,
    backgroundColor: "white",
    paddingTop: 50,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  fbContainer: {
    marginTop: 50
  },
  fbView: {
    flexDirection: "row",
    alignItems: "center"
  },
  fbText: {
    color: "#3E99EE",
    marginLeft: 10,
    fontWeight: "600",
    fontSize: 14
  },
  textInput: {
    height: 50,
    borderColor: "#bbb",
    borderWidth: 1, // StyleSheet.hairlineWidth
    width: width - 80,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FAFAFA",
    fontSize: 14
  },
  touchable: {
    borderRadius: 5,
    backgroundColor: "#3E99EE",
    width: width - 80
  },
  button:{
    paddingHorizontal: 7,
    height: 50,
    justifyContent: "center"
  },
  btnText:{
    color: "white",
    fontWeight: "600",
    textAlign: "center",
    fontSize: 14
  }
});

export default LoginScreen;
