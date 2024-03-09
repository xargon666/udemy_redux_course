// ********************************************************************************
// IMPORTS
import { v4 as uuidv4 } from "uuid";
import { createSlice } from "@reduxjs/toolkit";

// ********************************************************************************
// SLICE
const taskSlice = createSlice({
    name: "tasks",
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            state.push({
                id: "1",
                task: action.payload.task,
                complete: action.payload.complete || false,
            });
        },
        removeTask: (state, action) => {
            const index = state.findIndex(
                (task) => task.id === action.payload.id
            );
            state.splice(index, 1);
        },
        editTask: (state, action) => {
            const index = state.findIndex(
                (task) => task.id === action.payload.id
            );
            action.payload.task && (state[index].task = action.payload.task)
            action.payload.complete && (state[index].complete = action.payload.complete)
            ;
        },
        completeTask: (state, action) => {
            const index = state.findIndex(
                (task) => task.id === action.payload.id
            );
            state[index].complete = true;
        },
    },
});

console.log("task slice",taskSlice)
export const { addTask, editTask, removeTask, completeTask } = taskSlice.actions;
export default taskSlice.reducer;
