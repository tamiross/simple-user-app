export const ADD_USER = 'ADD_USER';
export const REMOVE_USER = 'REMOVE_USER';
export const DELETE_USER = 'DELETE_USER';
export const RESET = 'RESET';
export const FETCH_DEMO_DATA = 'FETCH_DEMO_DATA';

export const addUser = () => ({
    type: ADD_USER
})

// export const removeUser = () => ({
//     type: REMOVE_USER
// })

export const deleteUser = () => ({
    type: DELETE_USER
})

export const reset = () => ({
    type: RESET
})

export const fetchDemoData = (payload) => ({
    type: FETCH_DEMO_DATA,
    payload: payload
})