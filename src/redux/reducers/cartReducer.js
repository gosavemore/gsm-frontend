import { types } from "../actions/index";
const { ADD_TO_CART, INCREMENT_ITEM_QUANTITY } = types;
const initialState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      // if cart is empty add to cart
      let data = {
        ...payload,
        quantity: 1,
      };

      if (state.items.length === 0) {
        return {
          ...state,
          items: state.items.concat(data),
          totalItems: 1,
          totalPrice: payload.price,
        };
      }
      // if not equal then add item to cart

      // if cart item id is equal to payload id just add quantity
      let availableItem = state.items.find((item) => item.id === payload.id);
      if (!availableItem) {
        return {
          ...state,
          items: state.items.concat(data),
          totalItems: (state.totalItems += 1),
          totalPrice: (state.totalPrice += data.price),
        };
      } else {
        state.items.map((item) => (item.quantity += 1));
        return {
          ...state,
          totalItems: (state.totalItems += 1),
          totalPrice: (state.totalPrice += data.price),
        };
      }
    case INCREMENT_ITEM_QUANTITY:
      for (let item in state.items) {
        if (item.id === payload.id) {
          item.quantity += 1;
        }
      }

    default:
      return state;
  }
};

export default cartReducer;
