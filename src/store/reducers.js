
const initialState = {
    count: 0,
    users: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return {
                ...state,
                count: state.count + 1
            };
        case 'DELETE_USER':
            // console.log('REDUCER  - Payload', action.payload)
            // console.log('action index', action.index)
            return {
                ...state,
                users: [...state.users.filter((post) => post.id !== action.payload)]
            }
        case 'RESET':
            return {
                ...state,
                count: 0
            };
        case 'FETCH_DEMO_DATA':
            let users;
            for (var index in action.payload) {
                const user = action.payload[index];
                user.birthDay = 'test'
                // console.log('index >> ', index)
                // console.log('USER:', user)
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