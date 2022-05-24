import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Redirect, Link } from 'react-router-dom';
import { changeSubtotalList } from '../redux/slice/productCart';
import { navbarConfig } from '../styles/themes/NavbarConfig';
import { shade } from 'polished'
import Switch from 'react-switch'
import {
  NavbarDiv,
  NavBarProducs,
  NavBarOrders,
  NavBarProfile,
  NavBarCheckout,
} from '../styles/navBarStyles/NavBarStyles';
import themes from '../styles/themes/light';
import { changeTheme } from '../redux/slice/themeSelect';

export default function Navbar({ menu }) {
  const dispatch = useDispatch();
  const [darkModeON, setDarkModeOn] = useState(false)

  const productsSold = useSelector(({ productCartReducer }) => (
    productCartReducer.subtotalCartList)).filter((product) => product.subtotal > 0);

  const [redirectOn, setRedirectOn] = useState(false);
  const [userName, setUserName] = useState();
  const { pathname } = useHistory().location;


  useEffect(() => {
    const { name } = JSON.parse(localStorage.getItem('user'));
    setUserName(name);
  }, []);

  const clearAndRedirect = () => {
    localStorage.clear();

    productsSold.forEach(productSold => {
      dispatch(changeSubtotalList({ ...productSold, subtotal: 0, quantity: 0 }))
    });

    setRedirectOn(true);
  };

  const renderAdmin = (
    <NavBarOrders config={navbarConfig.saller.orders}>
      <div data-testid="customer_products__element-navbar-link-orders">
        <h3>Gerenciar Usuários</h3>
      </div>
    </NavBarOrders>
  );

  const renderSeller = (
    <NavBarOrders config={navbarConfig.saller.orders}>
      <Link
        to="/seller/orders"
        data-testid="customer_products__element-navbar-link-orders"
      >
        <h3>Pedidos</h3>
      </Link>
    </NavBarOrders>
  );

  const renderCustomer = (
    <>
      <NavBarProducs >
        <Link
          to="/customer/products"
          data-testid="customer_products__element-navbar-link-products"
        >
          <h3>Produtos</h3>
        </Link>
      </NavBarProducs>
      <NavBarOrders config={navbarConfig.costumer.orders}>
        <Link
          to="/customer/orders"
          data-testid="customer_products__element-navbar-link-orders"
        >
          <h3>Meus Pedidos</h3>
        </Link>
      </NavBarOrders>
    </>);

  const renderByRole = () => {
    if (pathname.includes('customer')) {
      return renderCustomer;
    }
    if (pathname.includes('seller')) {
      return renderSeller;
    }
    if (pathname.includes('admin')) {
      return renderAdmin;
    }
  };


  const toggleTheme = () => {
    dispatch(changeTheme())
    setDarkModeOn(!darkModeON)
  }

  return (
    <NavbarDiv menu={menu}>

      {redirectOn ? <Redirect to="/login" /> : null}
      {renderByRole()}

      <NavBarProfile>
        <h3 data-testid="customer_products__element-navbar-user-full-name">
          {userName}
        </h3>
        <Switch
          onChange={toggleTheme}
          checked={darkModeON}
          checkedIcon={false}
          uncheckedHandleIcon={false}
          height={15}

          handleDiameter={20}
          onColor={themes.colors.secundary}
          offColor={shade(0.15, themes.colors.primary)}
        />
      </NavBarProfile>
      <NavBarCheckout>
        <button
          type="button"
          onClick={() => clearAndRedirect()}
          data-testid="customer_products__element-navbar-link-logout"
        >
          sair
        </button>
      </NavBarCheckout>
    </NavbarDiv>
  );
}
