// types
type StateType = {
  tasks: { id: string; text: string; completed: boolean }[] | [];
  currentTask: string;
  completedTasks: number;
  editFlag: boolean;
  editID: string;
};
// imports
import { createSlice } from "@reduxjs/toolkit";
import {
  getTasksFromLocalStorage,
  addItemToLocalStorage,
  getCompletedTasks,
} from "../../utils/localStorage";
// initial state
const initialState: StateType = {
  tasks: getTasksFromLocalStorage(),
  currentTask: "",
  completedTasks: getCompletedTasks(),
  editFlag: false,
  editID: "",
};
// slice settings
const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    changeInput: (state, { payload }: { payload: string }) => {
      state.currentTask = payload;
    },
    setToDefault: (state) => {
      state.currentTask = "";
      state.editFlag = false;
      state.editID = "";
    },
    createTask: (state) => {
      const id = new Date().getTime().toString();
      const task = {
        id,
        text: state.currentTask,
        completed: false,
      };
      addItemToLocalStorage(task);
      state.tasks = [task, ...state.tasks];
    },
    editTask: (state) => {
      const items = getTasksFromLocalStorage();
      const newItems = items.map((item) => {
        if (item.id === state.editID) {
          item.text = state.currentTask;
        }
        return item;
      });
      state.tasks = newItems;
      localStorage.setItem("tasks", JSON.stringify(newItems));
      state.completedTasks = getCompletedTasks();
    },
    checkTask: (state, { payload }: { payload: string }) => {
      const items = getTasksFromLocalStorage();
      const newItems = items.map((item) => {
        if (item.id === payload) {
          item.completed = !item.completed;
        }
        return item;
      });
      state.tasks = newItems;
      localStorage.setItem("tasks", JSON.stringify(newItems));
      state.completedTasks = getCompletedTasks();
    },
    switchEdit: (
      state,
      { payload: { id, text } }: { payload: { id: string; text: string } }
    ) => {
      state.editFlag = true;
      state.editID = id;
      state.currentTask = text;
    },
    deleteTask: (state, { payload }: { payload: string }) => {
      const items = getTasksFromLocalStorage();
      const newItems = items.filter((item) => {
        return item.id !== payload;
      });
      state.tasks = newItems;
      localStorage.setItem("tasks", JSON.stringify(newItems));
      state.completedTasks = getCompletedTasks();
    },
  },
});
// exports
export const {
  createTask,
  changeInput,
  setToDefault,
  deleteTask,
  checkTask,
  switchEdit,
  editTask,
} = tasksSlice.actions;
export default tasksSlice.reducer;
