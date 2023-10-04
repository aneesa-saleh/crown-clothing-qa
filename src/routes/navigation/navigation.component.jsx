import { Fragment, useContext, useRef, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate, Navigate } from 'react-router-dom';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { CartContext } from '../../contexts/cart.context';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
  LoadingPage,
} from './navigation.styles';
import { selectCurrentUser } from '../../store/user/user.selector';

const Navigation = ({ verifyingUser }) => {
  const navigate = useNavigate();
  const currentUser = useSelector(selectCurrentUser);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const cartDropdownRef = useRef(null)
  const cartIconRef = useRef(null)

  function handleCheckoutButtonClick() {
    closeCart();
    navigate('/checkout');
  }

  function handleCartIconClick() {
    if (!isCartOpen) {
      openCart();
    } else {
      closeCart();
    }
  }

  function handleOutsideCartClick(event) {
    if (!cartDropdownRef.current || !cartIconRef.current) return;

    if (!(cartDropdownRef.current.contains(event.target))
        && !cartIconRef.current.contains(event.target)) {
      closeCart()
    }
  }

  function openCart() {
    document.addEventListener("click", handleOutsideCartClick, false);
    setIsCartOpen(true);
  }

  function closeCart() {
    document.removeEventListener("click", handleOutsideCartClick, false);
    setIsCartOpen(false);
  }

  async function logOut() {
    try {
      await signOutUser()
      navigate('/auth')
    } catch(error) {
      alert(error)
    }
  }

  if (verifyingUser) {
    return (<LoadingPage>
        <CrwnLogo className='logo' /> Loading...
      </LoadingPage>)
  } else if (!currentUser) {
    return <Navigate to="/auth" replace />
  }

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo className='logo' />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>SHOP</NavLink>
          <NavLink as='span'>
              {currentUser.email}
          </NavLink>
          <NavLink as='span' onClick={logOut}>
              SIGN OUT
          </NavLink>
          <CartIcon onClick={handleCartIconClick} iconRef={cartIconRef} />
        </NavLinks>
        {isCartOpen &&
          <CartDropdown
            handleCheckoutButtonClick={handleCheckoutButtonClick}
            cartContainerRef={cartDropdownRef}
          />
        }
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
