import { types } from "../actions/index";

const { ADD_TO_CART } = types;

const initialState = {
  item: [],
};

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      return {
        ...state,
        item: state.item.concat(payload),
      };

    default:
      return state;
  }
};

export default cartReducer;
