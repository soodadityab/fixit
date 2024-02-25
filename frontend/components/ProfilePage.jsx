import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export default function ProfilePage({ profile }) {
  return (
    <View style={styles.container}>
      {/* <Image source={{ uri: profile.avatarUrl }} style={styles.avatar} /> */}
      <Text style={styles.name}>{profile.name}</Text>
      <Text style={styles.detail}>{profile.email}</Text>
      <Text style={styles.detail}>{profile.picturesSubmitted}</Text>
      <Text style={styles.detail}>{profile.upvotes}</Text>
      <Text style={styles.detail}>{profile.fixed}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 5,
  },
  detail: {
    fontSize: 16,
    color: "gray",
  },
});
