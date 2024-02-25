import React from "react";
import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";

const Home = ({ navigation }) => {
  const onClickCam = () => {
    navigation.navigate(" ");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to Fix-It!</Text>
      <Text>Press below to submit a fix-it help request</Text>
      <TouchableOpacity onPress={onClickCam} style={styles.mainButton}>
        <Text style={styles.buttonText}>Report an Issue!</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Reports")}
        style={styles.secondaryButton}
      >
        <Text style={styles.buttonText}>See Open Reports</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  welcomeText: {
    fontSize: 24,
    marginBottom: 20,
  },
  mainButton: {
    backgroundColor: "red",
    padding: 20,
    borderRadius: 10,
  },
  secondaryButton: {
    backgroundColor: "grey",
    padding: 10,
    marginTop: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default Home;
