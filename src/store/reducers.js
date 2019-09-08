
const initialState = {
    count: 0,
    users: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return {
                ...state
            };
        case 'DELETE_USER':
            return {
                ...state,
                users: [...state.users.filter((user) => user.id !== action.payload)]
            }
        case 'RESET':
            return {
                ...state
            };
        case 'FETCH_DEMO_DATA':
            for (var index in action.payload) {
                const user = action.payload[index];
                user.birthDay = 'B day goes here'
            }

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