import TYPE from '../types/types';

const INITIAL_STATE = {};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPE: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default: return state;
  };
};

export default reducer;
