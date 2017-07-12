import {createStore,applyMiddleware} from 'redux';
import RootReducer from '../reducers/index';
import promise from 'redux-promise';

const middleware =applyMiddleware(promise);
const Store =createStore(RootReducer,middleware);

export default Store;