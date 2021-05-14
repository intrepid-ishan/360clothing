import { createSelector } from 'reselect';

/** __reselect__
 * Two types of selectors
 * 1. Input selector: it doesn't use createSelector ex: selectCart
 * 2. Output selector: it uses input selector and createSelector ex: selectCartItemsCount
 */

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

// cartItems will only be reduced if cartItems changed
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((acc, item) => acc + item.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0)
);
