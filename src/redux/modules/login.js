const defaultState = {
    isLoggedin: false,
    username: '',
    password: ''
};

export default function reducer(state = defaultState, action) {
    switch(action.type){
        case 'LOGIN':
            return Object.assign({}, state, {
                isLoggedin: true,
                username: action.username,
                password: action.password
            });
        case 'LOGOUT':
            return Object.assign({}, state, {
                isLoggedin: false, 
                username: '',
                password: ''
            });
        default: 
            return state;
    }
}