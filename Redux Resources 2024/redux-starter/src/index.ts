import { 
    addTask, 
    removeTask, 
    completeTask,
    fetchTodo 
} from "./store/tasks";
import store from './store/configureStore'

console.log("The Redux Starter Project!!");

const unsubscribe = store.subscribe(() => {
    console.log("Updated", store.getState());
});

store.dispatch(addTask("Do the shopping",true));
store.dispatch(completeTask("1"));
store.dispatch(addTask("Task 2"));
store.dispatch(removeTask("1")); // Can't tartget IDs right now with UUID, temp disabled
// store.dispatch(fetchTodo());
// unsubscribe();


