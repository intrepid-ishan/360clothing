//reducer - function that get's two prop 1.state 2.action
//      1.state - given by redux store whenever action is fired
//      2.action - object : type,payload

//similar to set initial value in hook
const INITIAL_STATE = {
    currentUser: null
};

//if state "undefined" - then default param
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            };
        default: //caveat - every reducer get's any action that get's fired            
            return state;
    }
};

export default userReducer;