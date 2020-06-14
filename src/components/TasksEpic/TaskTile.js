import React, { useState } from "react";
import { Text, Image, StyleSheet, TouchableOpacity, View } from "react-native";
//TouchableOpacity pour rendre une zone cliquable et opaque quand on clic dessus
//TouchableHighlight pour rendre une zone cliquable et colorée quand on clic dessus

//REDUX
import { useDispatch } from "react-redux";
import { toggleTask, deleteTask } from "../../redux/actions";

const TaskTile = ({ id, title, completed, onChangeStatus, onDeleteTask }) => {
  //redux
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      //onPress={() => onChangeStatus(id)}
      onPress={() => dispatch(toggleTask(id))}
    >
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Image
            style={styles.icon}
            source={
              completed
                ? require("../../../assets/check_circle-24px.png")
                : require("../../../assets/brightness_1-24px.png")
            }
          />
        </View>
        <Text style={[styles.title, { color: completed ? "grey" : "black" }]}>
          {title}
        </Text>
        <TouchableOpacity
          //onPress={() => onDeleteTask(id)}
          onPress={() => dispatch(deleteTask(id))}
        >
          <Image
            style={styles.icon}
            source={require("../../../assets/delete_outline-24px.png")}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  subContainer: {
    flexDirection: "row",
    //justifyContent: "flex-start",
    alignItems: "center",
  },
  title: {
    marginLeft: 30,
  },
  icon: {
    width: 30,
    height: 30,
  },
});

export default TaskTile;
