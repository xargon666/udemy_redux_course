import * as actionTypes from "./actionTypes";

export const addTask = (task: string, complete?: boolean) => {
    return { 
        type: actionTypes.ADD_TASK, 
        payload: { task: task, complete: complete } 
    };
};

export const removeTask = (id: string) => {
    return { 
        type: actionTypes.REMOVE_TASK, 
        payload: { id: id } 
    };
};
export const completeTask = (id: string) => {
    return { 
        type: actionTypes.COMPLETE_TASK, 
        payload: { id: id } 
    };
};
