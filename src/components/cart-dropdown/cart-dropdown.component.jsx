import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import CartItem from '../cart-item/cart-item.component';

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
  CartButton
} from './cart-dropdown.styles';

const CartDropdown = ({ handleCheckoutButtonClick, cartContainerRef }) => {
  const { cartItems } = useContext(CartContext);

  return (
    <CartDropdownContainer ref={cartContainerRef}>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <CartButton onClick={handleCheckoutButtonClick}>GO TO CHECKOUT</CartButton>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
