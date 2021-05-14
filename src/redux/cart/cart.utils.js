const findItem = (cartItems, itemToFind) =>
  cartItems.find((cartItem) => cartItem.id === itemToFind.id);

export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = findItem(cartItems, cartItemToAdd);

  // if existing then increase quantity of item by 1
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // else create new item with quantity = 1
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const clearItemFromCart = (cartItems, cartItemToClear) =>
  cartItems.filter((item) => item.id !== cartItemToClear.id);

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  // if quantity is 1 then clear item
  if (cartItemToRemove.quantity === 1) {
    return clearItemFromCart(cartItems, cartItemToRemove);
  }

  // else decrease quantity of item by 1
  return cartItems.map((item) =>
    item.id === cartItemToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};
