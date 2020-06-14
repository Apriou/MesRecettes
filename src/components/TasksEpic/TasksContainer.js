import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import TasksList from "./TasksList";
import TaskForm from "./TaskForm";
import CounterContainer from "./CountersContainer";
import FloatingButton from "../_Shared/FloatingButton";
import Header from "../_Shared/Header/Header";

//Redux
import { useSelector } from "react-redux";
import { getTasks } from "../../redux/selectors";

export default function TasksContainer(props) {
  //const [tasks, setTasks] = useState([]);

  //Redux on prend le state depuis redux
  const tasks = useSelector(getTasks);

  const [isFormOpened, setIsFormOpened] = useState(false);

  // const onAddTask = (title) => {
  //   const newTask = {
  //     id: new Date().getTime(),
  //     title: title,
  //     completed: false,
  //   };
  //   setTasks([newTask, ...tasks]);
  // };

  const onChangeStatus = (id) => {
    // let newTasks = [];
    // tasks.forEach((task) => {
    //   if (task.id === id) {
    //     newTasks.push({
    //       id: id,
    //       title: task.title,
    //       completed: !task.completed,
    //     });
    //   } else {
    //     newTasks.push(task);
    //   }
    // });
    // setTasks(newTasks);
  };

  const onDeleteTask = (id) => {
    // let newTasks = [];
    // tasks.forEach((task) => {
    //   if (task.id !== id) {
    //     newTasks.push(task);
    //   }
    // });
    // setTasks(newTasks);
  };

  const getTasksCompleted = () => {
    let counter = 0;
    tasks.forEach((task) => {
      if (task.completed) {
        counter++;
      }
    });
    return counter;
  };

  const toggleForm = () => {
    setIsFormOpened(!isFormOpened);
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.subcontainer}>
        {isFormOpened && (
          <TaskForm
          //onAddTask={onAddTask}
          />
        )}
        <CounterContainer
          nbTasks={tasks.length}
          nbTasksCompleted={() => getTasksCompleted()} //ici on met une arrow parce qu'il nous renvoie quelquechose (return)
        />
        <TasksList
          tasks={tasks}
          onChangeStatus={onChangeStatus}
          onDeleteTask={onDeleteTask}
        />
      </View>
      <FloatingButton toggleForm={toggleForm} isFormOpened={isFormOpened} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    //backgroundColor: "red",
  },
  subcontainer: {
    //flex: 1,
    //backgroundColor: "red",
    position: "relative", //Pour que le floatingButton ait une position absolue
  },
});
