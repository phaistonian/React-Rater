import { SELECT, HOVER } from '../constants/app.js';

const initialState = {
  selected: null,
  hovered: null
};

export default function app (state = initialState, action) {
  const { type, index } = action;

  switch (type) {
    case SELECT:
      return { ...state, selected: index };

    case HOVER:
      return { ...state, hovered: index };

    default:
      return state;
  }
}
