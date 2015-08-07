import { SELECT, HOVER } from '../constants/app.js';

export function select (index) {
  return {
    type: SELECT,
    index
  };
}

export function hover (index) {
  return {
    type: HOVER,
    index
  };
}


