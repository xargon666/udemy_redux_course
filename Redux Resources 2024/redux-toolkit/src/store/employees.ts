// **************************************************************************
// IMPORTS
import { v4 as uuidv4 } from "uuid";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// **************************************************************************
// SLICE
const employeeSlice = createSlice({
    name: "employee",
    initialState: [],
    reducers: {
        addEmployee: (state, action: PayloadAction<{id:string,name:string}>) => {
            state.push({
                id: uuidv4(),
                name: action.payload.name
            });
        },
        removeEmployee: (state, action: PayloadAction<{id:string}>) => {
            const index = state.findIndex(
                (emp) => emp.id === action.payload.id
            );
            state.splice(index, 1);
        },
        },
});
// **************************************************************************
// EXPORTS
export const { addEmployee, removeEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
