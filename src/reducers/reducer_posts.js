import {FETCH_POSTS,FETCH_REQUESTED_POST,DELETE_POST} from '../actions';
import _ from 'lodash';

export default function(state={},action){
    switch(action.type)
    {   
        case DELETE_POST:
        return _.omit(state,action.payload);

        case FETCH_REQUESTED_POST:
        const post=action.payload.data;
        const newState= {...state};
        newState[post.id]=post;
        return newState;

        case FETCH_POSTS:
        return _.mapKeys(action.payload.data,'id');
        
        default:
        return state;
    }
}