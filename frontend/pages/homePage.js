import React from "react";
import Home from "../components/home";
import { View } from "react-native";
import TitleBar from "../components/titlebar";

export default function HomePage({ navigation }) {
  return (
    <View>
      <TitleBar />
      <Home navigation={navigation} />
    </View>
  );
}
