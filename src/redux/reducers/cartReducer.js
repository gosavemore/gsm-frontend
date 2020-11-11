import { types } from "../actions/index";
const {
  ADD_TO_CART,
  INCREMENT_ITEM_QUANTITY,
  DECREMENT_ITEM_QUANTITY,
  RESET_ITEM_QUANTITY,
  CART_SAVE_ITEM_START,
  CART_SAVE_ITEM_SUCCESS,
  CART_SAVE_ITEM_FAIL,
  GET_CART_START,
  GET_CART_SUCCESS,
  GET_CART_FAIL,
} = types;
const initialState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
  isLoading: false,
  err: "",
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
        state.items.filter((item) => {
          if (item.id === payload.id) {
            item.quantity += 1;
          }
        });

        return {
          ...state,
          totalItems: (state.totalItems += 1),
          totalPrice: (state.totalPrice += data.price),
        };
      }
    case INCREMENT_ITEM_QUANTITY:
      for (let item of state.items) {
        if (item.id === payload) {
          item.quantity += 1;
          state.totalItems += 1;
          state.totalPrice += item.price;
        }
      }
      return state;

    case DECREMENT_ITEM_QUANTITY:
      for (let item of state.items) {
        if (item.id === payload) {
          if (item.quantity === 1) {
            return {
              items: state.items.filter((x) => x.id !== payload),
              totalItems: 0,
            };
          } else {
            item.quantity -= 1;
            state.totalItems -= 1;
            state.totalPrice -= item.price;
          }
        }
      }
      return state;

    case RESET_ITEM_QUANTITY:
      console.log("total:", state.totalItems);
      return {
        ...state,
        isLoading: false,
        totalItems: 0,
      };

    case CART_SAVE_ITEM_START:
      return {
        ...state,
        isLoading: true,
      };
    case CART_SAVE_ITEM_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case CART_SAVE_ITEM_FAIL:
      return {
        ...state,
        err: payload,
      };

    case GET_CART_START:
      return {
        ...state,
        isLoading: true,
      };

    case GET_CART_SUCCESS:
      return {
        ...state,
        isLoading: false,
        items: [...state.items, ...payload],
      };

    case GET_CART_FAIL:
      return {
        ...state,
        err: payload,
      };

    default:
      return state;
  }
};

export default cartReducer;
