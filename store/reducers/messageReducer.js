const messageReducer = (state={
    visibility: false,
    type: null,
    message: null,
},action) => {
    switch (action.type){
        case 'SUCCESS_MESSAGE':
            return {
                ...state, visibility: true, type: 'success', message: action.payload,
            };
        case 'ERROR_MESSAGE':
            return {
                ...state,visibility: true, type: 'error', message: action.payload,
            };
        case 'CLOSE_MESSAGE':
            return {
                ...state, visibility: false, type: null, message: null
            };
        default:
            return state;
    }
}
export default messageReducer