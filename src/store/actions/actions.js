import { ADD_USER, DELETE_USER, FETCH_DEMO_DATA, CLOSE_EDIT_FORM } from './action_types';

export const addUser = () => ({
    type: ADD_USER
})

export const deleteUser = (payload) => ({
    type: DELETE_USER,
    payload: payload
})

export const fetchDemoData = (payload) => ({
    type: FETCH_DEMO_DATA,
    payload: payload
})

export const closeEditPopup = () => ({
    type: CLOSE_EDIT_FORM
})