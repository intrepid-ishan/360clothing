import { createStore, applyMiddleware } from 'redux';

//middleware - log the state of redux after each action fired
import logger from 'redux-logger';

import rootReducer from './root-reducer';

import { composeWithDevTools } from 'redux-devtools-extension';

//scalable
const middlewares = [logger];

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(...middlewares)
));
// const store = createStore(rootReducer, applyMiddleware(logger));

export default store;