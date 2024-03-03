import { store } from "./store";
import { 
    addTask, 
    removeTask, 
    completeTask 
} from "./actions";

console.log("The Redux Starter Project!!");

const unsubscribe = store.subscribe(() => {
    console.log("Updated", store.getState());
});

store.dispatch(addTask("Do the shopping",true));
store.dispatch(completeTask("1"));
store.dispatch(addTask("Task 2"));
store.dispatch(removeTask("1")); // Can't tartget IDs right now with UUID, temp disabled
unsubscribe();

// NEW EXCERCISE
// ADD NEW ACTION TO CHANGE TASK COMPLETION STATUS TO "TRUE"
