// IMPORTS
import {v4 as uuid} from 'uuid'

// TYPES
interface State {
    id: string;
    task: string;
    completed: boolean;
}
interface Action {
    type: string;
    payload: State;
}
interface Props {
    state: State[];
    action: Action;
}

// FUNCTIONS
function reducer(props: Props) {
    const { state, action } = props;

    switch (action.type) {
        case "ADD_TASK":
            return [
                ...state,
                {
                    id: uuid(),
                    task: action.payload.task,
                    completed: false,
                },
            ];

        case "REMOVE_TASK":
            return state.filter((task) => task.id !== action.payload.id);

        default:
            return state;
    }
}
