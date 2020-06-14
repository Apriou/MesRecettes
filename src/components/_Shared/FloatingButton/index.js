import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

//Paper
import { FAB } from "react-native-paper";

const FloatingButton = ({ toggleForm, isFormOpened }) => {
  return (
    // <TouchableOpacity style={styles.container} onPress={toggleForm}>
    //   <Text style={styles.title}>{isFormOpened ? "x" : "+"}</Text>
    // </TouchableOpacity>

    <FAB
      style={styles.fab}
      small
      icon={isFormOpened ? "close" : "plus"}
      onPress={toggleForm}
    />
  );
};

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: "lightgrey",
  },
  // container: {
  //   position: "absolute",
  //   bottom: 20,
  //   right: 20,
  //   width: 50,
  //   height: 50,
  //   borderRadius: 100,
  //   backgroundColor: "orange",
  //   justifyContent: "center",
  // },
  // title: {
  //   fontWeight: "bold",
  //   color: "white",
  //   textAlign: "center",
  //   fontSize: 35,
  // },
});

export default FloatingButton;
