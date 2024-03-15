// **************************************************************************
// IMPORTS
import { v4 as uuidv4 } from "uuid";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Employee, Slice } from "../Types/employees";
// **************************************************************************
// SLICE
const initialState: Slice = {
    employees: [],
    loading: false,
    error: null,
};
const employeeSlice = createSlice({
    name: "employee",
    initialState,
    reducers: {
        getEmployees: (state,action: PayloadAction<{employees: Employee[]}>)=>{
            state.employees = action.payload.employees
        },
        addEmployee: (state, action: PayloadAction<{id:string,name:string,username:string}>) => {
            const newID = uuidv4()
            state.employees.push({
                id: newID,
                name: action.payload.name,
                username: action.payload.username || `${action.payload.name} ${newID}`
            });
        },
        removeEmployee: (state, action: PayloadAction<{id:string}>) => {
            const index = state.employees.findIndex(
                (emp) => emp.id === action.payload.id
            );
            state.employees.splice(index, 1);
        },
        },
});
// **************************************************************************
// EXPORTS
export const { addEmployee, removeEmployee, getEmployees } = employeeSlice.actions;
export default employeeSlice.reducer;
