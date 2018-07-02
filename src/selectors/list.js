export const sortLists = (lists) => {

    const listCopy = lists.slice(0);

    listCopy.sort((a, b) => {
        return b.created - a.created; 
    });

    return listCopy;

};

export const getNames = (inventory, route) => {
    const level = route.length;
    if(level === 0)
        return Object.keys(inventory);
    if(level === 1)
        return Object.keys(inventory[route[0]]);
    if(level === 2)
        return Object.keys(inventory[route[0]][route[1]]);
    if(level === 3)
        return Object.keys(inventory[route[0]][route[1]][route[2]])        ;

    return [];    
}