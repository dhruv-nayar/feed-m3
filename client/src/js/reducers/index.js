// src/js/reducers/index.js
// redux reducer index.js
import {ADD_ARTICLE} from '../constants/action-types';

const initialState = {
  articles: [{"id":"ID1", "title":"test article name"}]
};
function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }
  return state;
}
export default rootReducer;
