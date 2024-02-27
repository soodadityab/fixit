import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ProfilePage from "../components/ProfilePage";

export default function Profile() {
  // get profile info from DB
  const profile_example = {
    // avatar :
    name: "Aditya Sood",
    email: "adibsood@stanford.edu",
    picturesSubmitted: "10",
    upvotes: "5",
    fixed: "2",
  };
  console.log("Rendering Profile component", profile_example);

  return (
    <View style={styles.container}>
      <ProfilePage profile={profile_example} />
      <Text style={styles.text}>Hi</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginTop: 20, // Adds space between the ProfilePage and the Text component
  },
});
