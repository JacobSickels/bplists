const listReducerDefaultState = {
    name: '',
    creator: '',
    items: []
};

export default (state = listReducerDefaultState, action) => {
    
    switch(action.type) {
        case 'SET_NAME':
            const name = action.name;
            return {...state, name}
        case 'ADD_ITEM':
            const copy = state.items.map(a => ({...a}));
            copy.push(action.item);
            return {...state, items: copy };
        default:
            return state;
    }

};