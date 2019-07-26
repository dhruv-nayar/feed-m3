// src/js/actions/index.js
// redux actions index.js

import {ADD_ARTICLE} from '../constants/action-types';

export function addArticle(payload) {
  return { type: "ADD_ARTICLE", payload }
};
