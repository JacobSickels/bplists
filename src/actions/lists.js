import uuid from 'uuid';
import database from '../firebase/firebase';


//Getting user lists from Firebase
export const setLists = (lists) => ({
    type: 'SET_LISTS',
    lists
});

export const startSetLists = () => {
    
    return (dispatch, getState) => {

        return database.ref(`lists`)
            .once('value')
            .then((snapshot) => {

                const lists = [];

                snapshot.forEach((childSnapshot) => {
                    lists.push({
                        id: childSnapshot.key,
                        ...childSnapshot.val()
                    });
                });

                dispatch(setLists(lists));

            });
    }
}


//Adding lists to Redux and Firebase
export const addList = (list) => ({
    type: 'ADD_LIST',
    list
});

export const startAddList = (list) => {
    return (dispatch, getState) => {

        return database.ref(`lists`)
            .push(list)
            .then((ref) => {
                dispatch(addList({
                    id: ref.key,
                    ...list
                }));
            }
        );
    };
};
