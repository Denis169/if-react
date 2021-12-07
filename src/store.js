import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';

import middleware, { sagaMiddleware } from './middleware';
import reducers from './reducers';
import rootSaga from './sagas';

const composeEnhancers = composeWithDevTools({});

export const store = createStore(reducers, composeEnhancers(applyMiddleware(...middleware)));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
