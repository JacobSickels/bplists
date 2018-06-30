const routeReducerDefaultState = [];

export default (state = routeReducerDefaultState, action) => {
    
    switch(action.type) {
        case 'ADD_TO_ROUTE':
            return [...state, action.item];
        case 'CLEAR_ROUTE':
            return [];    
        default:
            return state;
    }

};