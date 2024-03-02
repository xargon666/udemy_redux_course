import * as actionTypes from './actionTypes'

export const addTask = (task:string) => {
    return {type:actionTypes.ADD_TASK,payload: {task: task}}
}

export const removeTask = (id:string) => {
    return {type:actionTypes.REMOVE_TASK,payload: {id: id}}
}

