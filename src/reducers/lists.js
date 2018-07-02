const listsReducerDefaultState = [];

export default (state = listsReducerDefaultState, action) => {
    
    switch(action.type) {
        case 'ADD_LIST':
            return [...state, action.list];
        case 'SET_LISTS':
            return action.lists;   
        default:
            return state;
    }

};