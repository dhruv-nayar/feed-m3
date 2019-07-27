// src/js/reducers/index.js
// redux reducer index.js
import {ADD_ARTICLE} from '../constants/action-types';
import {ADD_INVENTORY} from '../constants/action-types';
import {OVERWRITE_INVENTORY} from '../constants/action-types';

const initialState = {
  articles: [{"id":"ID1", "title":"test article name"}],
  inventory: [
       {'id':'test1','name':'eggs', 'age':'14', 'category':'produce', 'storage':'fridge', 'quantity':'4oz'},
      {'id':'test2','name':'broccoli', 'age':'14', 'category':'produce', 'storage':'fridge', 'quantity':'4oz'},
      {'id':'test3','name':'cheese', 'age':'14', 'category':'produce', 'storage':'pantry', 'quantity':'4oz'}
    ]
};
function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }

  if (action.type === ADD_INVENTORY) {
    //console.log('adding inventory call:');
    //console.log(action.payload);
    return Object.assign({}, state, {
      inventory: state.inventory.concat(action.payload)
    });
  }

  if (action.type === OVERWRITE_INVENTORY) {
    //console.log('adding inventory call:');
    //console.log(action.payload);
    return Object.assign({}, state, {
      inventory: action.payload
    });
  }
  return state;
}
export default rootReducer;
