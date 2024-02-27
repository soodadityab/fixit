import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { RNCamera } from "react-native-camera";
import * as ImagePicker from "expo-image-picker";

const CameraPage = () => {
  const takePicture = async () => {
    const options = {
      saveToPhotos: true,
      mediaType: "photo",
    };

    launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log("User cancelled camera");
      } else if (response.error) {
        console.log("launchCamera Error: ", response.error);
      } else {
        const source = { uri: response.assets[0].uri };
        console.log(source);
      }
    });
  };

  const uploadPhoto = async (useLibrary) => {
    let result;
    if (useLibrary) {
      result = await ImagePicker.launchImageLibraryAsync({
        mediaType: ImagePicker.MediaTypeOptions.Images,
      });
    } else {
      await ImagePicker.requestCameraPermissionsAsync();
      result = await ImagePicker.launchCameraAsync({
        mediaType: ImagePicker.MediaTypeOptions.Images,
      });
    }
    if (!result.canceled) {
      console.log("not working");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Camera Page</Text>
      <RNCamera
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
      />
      <View style={{ flex: 0, flexDirection: "row", justifyContent: "center" }}>
        <TouchableOpacity onPress={takePicture} style={styles.capture}>
          <Text style={{ fontSize: 14 }}> SNAP </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={uploadPhoto} style={styles.capture}>
          <Text style={{ fontSize: 14 }}> UPLOAD </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "black",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    padding: 20,
    color: "white",
  },
  preview: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  capture: {
    flex: 0,
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: "center",
    margin: 20,
  },
});

export default CameraPage;
