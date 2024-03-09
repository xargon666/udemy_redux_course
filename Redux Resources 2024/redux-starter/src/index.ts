import store from './store/configureStore'
import { 
    addTask, 
    removeTask, 
    completeTask,
    editTask
} from "./store/tasks";
import { 
    addEmployee, 
    removeEmployee, 
} from "./store/employees";

console.log("The Redux Starter Project!!");

const unsubscribe = store.subscribe(() => {
    console.log("Updated", store.getState());
});


// TASK BLOCK
store.dispatch(addTask({task:"Task 1"}));
store.dispatch(addTask({task:"Task 2"}));
store.dispatch(editTask({
    id:"1",
    task:"Go Red Socks!"
}));
// store.dispatch(removeTask({id:"1"}))

// EMPLOYEE BLOCK
store.dispatch(addEmployee({name:"Dave"}))
store.dispatch(removeEmployee({id:'1'}))

// unsubscribe();


