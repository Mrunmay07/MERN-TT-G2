import {createStore} from "redux"

// Actions
const ADD_TASK = 'task/add'
const DELETE_TASK = 'task/delete'

const initialState = {
    task:[],
  
}

function reducer(state = initialState , action){
    switch (action.type) {
        case ADD_TASK:
            return {...state , task:[...state.task , action.payload]}
        
        case DELETE_TASK:
            const updatedArray = state.task.filter((currTask, index) => {
                return index !== action.payload
            })

            return {...state , task: updatedArray}
        
       
    }
}

// Creating a Redux Store
const store = createStore(reducer)
console.log(store)

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch({type:ADD_TASK , payload:'CODING'})

store.dispatch({type:ADD_TASK , payload:'GAMING'})

store.dispatch({type:ADD_TASK , payload:'STUDY'})

store.dispatch({type:DELETE_TASK , payload:1})
