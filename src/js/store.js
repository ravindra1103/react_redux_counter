import counterApp from './reducers/counter';
import { createStore,combineReducers } from 'redux';

export default createStore(combineReducers({ counterApp }));
