import React from "react";
import { View, StatusBar } from "react-native";
import AddPhotoNavigation from "../../navigation/AddPhotoNavigation";

const TakePhotoScreen = props => (
  <View style={{ flex: 1 }}>
    <StatusBar hidden={true} />
    <AddPhotoNavigation />
  </View>
);

export default TakePhotoScreen;
