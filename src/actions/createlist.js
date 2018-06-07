//Getting user lists from Firebase
export const addItem = (item) => ({
    type: 'ADD_ITEM',
    item
});

export const setName = (name) => ({
    type: 'SET_NAME',
    name
});