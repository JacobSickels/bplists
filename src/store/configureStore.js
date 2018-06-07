import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import listsReducer from '../reducers/lists';
import inventoryReducer from '../reducers/inventory';
import createListReducer from '../reducers/createlist';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Store Creation

export default () => {
    const store = createStore(
        combineReducers({
            auth: authReducer,
            inventory: inventoryReducer,
            lists: listsReducer,
            createlist: createListReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
};
