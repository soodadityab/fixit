import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const Home = ({ navigation }) => {
  const onClickCam = () => {
    navigation.navigate(" ");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to Fix-It!</Text>
      <TouchableOpacity onPress={onClickCam} style={styles.mainButton}>
        <Text style={styles.buttonText}>Submit a Fix-It Request</Text>
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
  welcomeText: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  descriptionText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  mainButton: {
    backgroundColor: "red",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    width: "80%",
    alignSelf: "center",
    shadowRadius: 3.84,
    marginBottom: 20,
  },
  secondaryButton: {
    backgroundColor: "grey",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: "80%",
    alignSelf: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Home;
