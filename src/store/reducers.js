const initialState = {
    count: 0,
    users: []
}

const reducer = (state = initialState, action) => {
    console.log('reducer', state, action)

    switch(action.type) {
        case 'ADD_USER':
            return {
                ...state,
                count: state.count + 1
            };
        case 'DELETE_USER':
            return {
                ...state,
                count: state.count - 1
            };
        case 'RESET':
            return {
                ...state,
                count: 0
            };
        case 'FETCH_DEMO_DATA':
            return {
                ...state,
                count: state.count,
                users: action.payload
            };
        default:
            return state;
    }
}

export default reducer