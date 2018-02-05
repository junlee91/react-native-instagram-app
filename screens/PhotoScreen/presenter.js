import React from "react";
import {
  Text,
  View,
  ScrollView,
  RefreshControl,
  StyleSheet
} from "react-native";
import PropTypes from "prop-types";
import Photo from "../../components/Photo";

const PhotoScreen = props => {
  const photo = props.photoDetail;

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={props.isFetching}
          onRefresh={props.refresh}
          tintColor={"black"}
        />
      }
    >
      <View style={styles.container}>
        <Photo {...photo} key={photo.id} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  }
});

PhotoScreen.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  refresh: PropTypes.func.isRequired
};

export default PhotoScreen;
