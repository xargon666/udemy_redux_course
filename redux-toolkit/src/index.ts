import store from "./store/configureStore";
import { addTask, removeTask, completeTask, editTask } from "./store/tasks";
import { addEmployee, removeEmployee } from "./store/employees";
import axios from "axios";
import { getTasks } from "./store/tasks";
import { getEmployees } from "./store/employees";

console.log("The Redux Starter Project!!");

const unsubscribe = store.subscribe(() => {
    console.log("Updated", store.getState());
});

// TASK BLOCK
const API_TASKS_URL = "http://localhost:5000/tasks";
const gettingTasks = async () => {
    // calling api
    const response = await axios.get(API_TASKS_URL);
    
    // dispatch action
    try {
        store.dispatch(getTasks({ tasks: response.data }));
    } catch (error) {
        store.dispatch({
            type: "SHOW_ERROR",
            payload: { error: error.message },
        });
    }
};
gettingTasks();

// EMPLOYEES BLOCK
const API_EMPLOYEES_URL = "http://localhost:5000/employees";
const gettingEmployees = async () => {
    // calling api
    const response = await axios.get(API_EMPLOYEES_URL);
    
    // dispatch action
    try {
        store.dispatch(getEmployees({ employees: response.data }));
    } catch (error) {
        store.dispatch({
            type: "SHOW_ERROR",
            payload: { error: error.message },
        });
    }
};
gettingEmployees();

