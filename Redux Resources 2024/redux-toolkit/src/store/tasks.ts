// ********************************************************************************
// IMPORTS
import { v4 as uuid } from "uuid";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task, Slice } from "../Types/tasks";
// ********************************************************************************
// SLICE
const initialState: Slice = {
    tasks: [],
    loading: false,
    error: null,
};
const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        getTasks: (state, action: PayloadAction<{ tasks: Task[] }>) => {
            state.tasks = action.payload.tasks;
        },
        addTask: (state, action: PayloadAction<Task>) => {
            state.tasks.push({
                id: uuid(),
                task: action.payload.task,
                complete: action.payload.complete || false,
            });
        },
        removeTask: (state, action: PayloadAction<{id:string}>) => {
            const index = state.tasks.findIndex(
                (task: Task) => task.id === action.payload.id
            );
            state.tasks.splice(index, 1);
        },
        editTask: (state, action: PayloadAction<Task>) => {
            const index = state.tasks.findIndex(
                (task) => task.id === action.payload.id
            );
            action.payload.task && (state.tasks[index].task = action.payload.task);
            action.payload.complete &&
                (state.tasks[index].complete = action.payload.complete);
        },
        completeTask: (state, action: PayloadAction<{id:string}>) => {
            const index = state.tasks.findIndex(
                (task) => task.id === action.payload.id
            );
            state.tasks[index].complete = true;
        },
    },
});

console.log("task slice", taskSlice);
export const { getTasks, addTask, editTask, removeTask, completeTask } =
    taskSlice.actions;
export default taskSlice.reducer;
