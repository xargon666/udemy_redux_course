// ********************************************************************************
// IMPORTS
import { v4 as uuidv4 } from "uuid";
import { createSlice } from "@reduxjs/toolkit";

// ********************************************************************************
// SLICE
const employeeSlice = createSlice({
    name: "employee",
    initialState: [],
    reducers: {
        addEmployee: (state, action) => {
            state.push({
                id: "1",
                name: action.payload.name
            });
        },
        removeEmployee: (state, action) => {
            const index = state.findIndex(
                (emp) => emp.id === action.payload.id
            );
            state.splice(index, 1);
        },
        },
});

export const { addEmployee, removeEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
