import { createSlice } from "@reduxjs/toolkit";

// initial State
const initialState = {
    task:[],
}

// Immer 
// create a slice 
const taskReducer = createSlice({
    name:"task", // Slice Name
    initialState, // initialState
    reducers:{
        addTask(state , action){
            state.task.push(action.payload)
        },
        deleteTask(state , action){
             state.task = state.task.filter((currTask, index) => {
                return index !== action.payload
            })
        }
    }
})