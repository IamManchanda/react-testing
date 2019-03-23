import { combineReducers } from 'redux';
import commentsReducer from 'store/reducers/comments';

const [comments] = [commentsReducer];
const reducers = combineReducers({ comments });

export default reducers;
