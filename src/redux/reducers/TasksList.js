import { ADD_TASK, TOGGLE_TASK, DELETE_TASK } from "../actionTypes";

const defaultState = []; //Liste de tâches

export const TasksList = (state = defaultState, action) => {
  //state prends la valeur defaultState si undefined ou null
  //action = { type: NOM_ACTION, payload }
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];
    case TOGGLE_TASK: {
      //   const newState = [];
      //   state.forEach((task) => {
      //     if (task.id === action.payload.id) {
      //       newState.push({
      //         id: task.id,
      //         title: task.title,
      //         completed: !task.completed,
      //       });
      //     } else {
      //       newState.push(task);
      //     }
      //   });
      //   return newState;
      //En plus simple avec map qui renvoie un array
      //   return state.map((task) => {
      //     if (task.id === action.payload.id) {
      //         return {id: task.id, title: task.title, completed: !task.completed }
      //     } else {
      //         return task;
      //     }
      //   });
      // }
      return state.map((task) => {
        if (task.id === action.payload.id) {
          task.completed = !task.completed;
        }
        return task;
      });
    }
    case DELETE_TASK: {
      let newState = [];
      const myIndex = state.findIndex((task) => task.id === action.payload.id);
      newState = state.filter((task, index) => index !== myIndex);
      return newState;
    }
    default:
      return state;
  }
};
