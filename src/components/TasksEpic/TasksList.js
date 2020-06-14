import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import TaskTile from "./TaskTile";

const TasksList = ({ tasks, onChangeStatus, onDeleteTask }) => {
  const _renderItem = ({ item, index }) => (
    <TaskTile
      key={index}
      id={item.id}
      title={item.title}
      completed={item.completed}
      //onChangeStatus={onChangeStatus}
      //onDeleteTask={onDeleteTask}
    />
  );

  return (
    <FlatList
      data={tasks}
      renderItem={_renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const styles = StyleSheet.create({});

export default TasksList;
