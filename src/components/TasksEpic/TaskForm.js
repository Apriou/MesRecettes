import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/actions";

//PAPER
import {
  Button as ButtonPaper,
  TextInput as InputPaper,
} from "react-native-paper";

const TaskForm = () => {
  const [title, setTitle] = useState("");

  //redux
  const dispatch = useDispatch();

  const _onChangeText = (value) => {
    setTitle(value);
  };

  const _onPressBtn = () => {
    if (title.length > 0) {
      //onAddTask(title);
      dispatch(addTask(title));
      setTitle("");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        {/* <TextInput value={title} onChangeText={_onChangeText} /> */}
        <InputPaper
          label="Nouvelle tâche"
          mode="outlined"
          value={title}
          onChangeText={_onChangeText}
        />
      </View>
      {/* <Button onPress={_onPressBtn} title="Ajouter" color="#841584" /> */}
      <ButtonPaper mode="outlined" icon="plus" onPress={_onPressBtn}>
        Ajouter
      </ButtonPaper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flexDirection: row,
    // justifyContent: "space-between",
    // alignItems: "center",
    alignItems: "flex-start",
    marginBottom: 15,
  },
  containerInput: {
    //width: "75%",
    // borderWidth: 1,
    // borderColor: "black",
    // borderRadius: 4,
    // paddingLeft: 7,
    width: "100%",
    marginBottom: 20,
  },
});

export default TaskForm;
