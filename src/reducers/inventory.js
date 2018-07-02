export default (state = {}, action) => {
    switch(action.type) {
        case 'SET_INVENTORY':
            return action.inventory
        default:
            return state;        
    }
};