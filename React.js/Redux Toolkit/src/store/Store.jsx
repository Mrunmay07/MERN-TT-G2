import { configureStore, createSlice } from "@reduxjs/toolkit";

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
console.log(taskReducer) // Object
export const {addTask , deleteTask} = taskReducer.actions


// Creating a Store RTK
export const store = configureStore({
    reducer:{
        taskReducer: taskReducer.reducer // reducer function
    }
})
console.log(store)

store.dispatch(addTask('Coding'))
store.dispatch(addTask('Cooking'))
store.dispatch(addTask('Gaming'))
store.dispatch(deleteTask(1))

