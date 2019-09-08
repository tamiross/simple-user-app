export const ADD_USER = 'ADD_USER';
export const DELETE_USER = 'DELETE_USER';
export const FETCH_DEMO_DATA = 'FETCH_DEMO_DATA';

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