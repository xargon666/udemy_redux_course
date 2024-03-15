import store from "./store/configureStore";
import { addTask, removeTask, completeTask, editTask } from "./store/tasks";
import { addEmployee, removeEmployee } from "./store/employees";
import axios from "axios";
import { getTasks } from "./store/tasks";

console.log("The Redux Starter Project!!");

const unsubscribe = store.subscribe(() => {
    console.log("Updated", store.getState());
});

// TASK BLOCK
const API_TASKS_URL = "http://localhost:5000/api/tasks";
const gettingTasks = async () => {
    // calling api
    const response = await axios.get(API_TASKS_URL);
    console.log("AXIOS!", response);

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
// store.dispatch({type:"SHOW_ERROR",payload:{error:"aAHHHH!!!"}})

// store.dispatch(addTask({task:"Task 1"}));
// store.dispatch(addTask({task:"Task 2"}));
// store.dispatch(editTask({
//     id:"1",
//     task:"Go Red Socks!"
// }));
// // store.dispatch(removeTask({id:"1"}))

// // EMPLOYEE BLOCK
// store.dispatch(addEmployee({name:"Dave"}))
// store.dispatch(removeEmployee({id:'1'}))

// // unsubscribe();