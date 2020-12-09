//action - trigger case inside switch
//      action creator function return objects
//      rule: object should be in correct format

//components will leverage below
export const setCurrentUser = user => ({
    type: 'SET_CURRENT_USER',
    payload: user
});