export const addToCart = (product) => {
    return {
      type: "ADD_TO_CART",
      payload: product
    };
  };


const initialState = { cartItems: [] };

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const { id } = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      if (existingItem) {
        const updatedCartItems = state.cartItems.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity +1,
            };
          }
          return item;
        });

        return {
          ...state,
          cartItems: updatedCartItems,
        };
      } else {
        return {
          ...state,
          cartItems: [
            ...state.cartItems,
            {
              ...action.payload,
              quantity: 1,
            },
          ],
        };
      }

    default:
    return state;
    }
  
};


export default cartReducer;