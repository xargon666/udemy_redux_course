// ********************************************************************************
// IMPORTS
import store from "./configureStore";
import { v4 as uuidv4 } from "uuid";
import { Action, State } from "../Types/tasks";

// ********************************************************************************
// ACTION TYPES
const ADD_TASK = "ADD_TASK";
const REMOVE_TASK = "REMOVE_TASK";
const COMPLETE_TASK = "COMPLETE_TASK";

// ********************************************************************************
// ACTIONS
export const addTask = (task: string, complete?: boolean) => {
    return {
        type: ADD_TASK,
        payload: { task: task, complete: complete },
    };
};

export const removeTask = (id: string) => {
    return {
        type: REMOVE_TASK,
        payload: { id: id },
    };
};
export const completeTask = (id: string) => {
    return {
        type: COMPLETE_TASK,
        payload: { id: id },
    };
};

export const fetchTodo = () =>
    async function () {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos/1"
        );
        const task = await response.json();
        store.dispatch(addTask(task.title));
    };

// ********************************************************************************
// REDUCER
// Initial state with a tasks array
const initialState: State = {
    tasks: [],
};

// Reducer function matching Redux signature
export default function reducer(
    state: State = initialState,
    action: Action
): State {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    {
                        // id: uuidv4(), // Unable to tartget IDs right now with UUID, temp disabled
                        id: "1",
                        task: action.payload.task,
                        complete: action.payload.complete || false,
                    },
                ],
            };

        case REMOVE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(
                    (task) => task.id !== action.payload.id
                ),
            };

        case COMPLETE_TASK:
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === action.payload.id
                        ? { ...task, complete: true }
                        : task
                ),
            };

        default:
            return state;
    }
}
