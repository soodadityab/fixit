import React from "react";
import { View, Dimensions, Image } from "react-native";

const windowWidth = Dimensions.get("window").width;

export default function TitleBar() {
  return (
    <View>
      <Image
        source={require("../assets/fixitlogo.png")}
        style={{ width: windowWidth, height: undefined, aspectRatio: 1 }}
        resizeMode="contain"
      />
    </View>
  );
}
