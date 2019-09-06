export const ADD_USER = 'ADD_USER';
export const REMOVE_USER = 'REMOVE_USER';
export const FETCH_DEMO_DATA = 'FETCH_DEMO_DATA';

export const addUser = () => ({
    type: ADD_USER
})

export const removeUser = (payload) => ({
    type: REMOVE_USER,
    payload: payload
})

export const fetchDemoData = (payload) => ({
    type: FETCH_DEMO_DATA,
    payload: payload
})