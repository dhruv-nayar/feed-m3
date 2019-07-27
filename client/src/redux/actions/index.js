// src/js/actions/index.js
// redux actions index.js

import {ADD_ARTICLE} from '../constants/action-types';
import {ADD_INVENTORY} from '../constants/action-types';
import {OVERWRITE_INVENTORY} from '../constants/action-types';

export function addArticle(payload) {
  return { type: "ADD_ARTICLE", payload }
};

export function addInventory(payload) {
  return { type: "ADD_INVENTORY", payload }
};

export function overwriteInventory(payload) {
  return { type: "OVERWRITE_INVENTORY", payload }
};
