import {combineReducers} from 'redux';
import PostReducer from './reducer_posts';
import {reducer as formReducer} from 'redux-form';

const RootReducer=combineReducers( { 
    posts:PostReducer,
    form:formReducer
});

export default RootReducer;