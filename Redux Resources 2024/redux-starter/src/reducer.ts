// IMPORTS
import { v4 as uuidv4 } from "uuid";
import {Action,State} from './Types'
import * as actionTypes from './actionTypes'
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
    case actionTypes.ADD_TASK:
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

    case actionTypes.REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.id),
      };

    case actionTypes.COMPLETE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) => task.id === action.payload.id ? {...task, complete: true} : task),
      };

    default:
      return state;
  }
}
