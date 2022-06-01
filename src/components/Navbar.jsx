import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Redirect, Link } from 'react-router-dom';
import { changeSubtotalList } from '../redux/slice/productCart';
import { navbarConfig } from '../styles/themes/NavbarConfig';
import { logout } from '../images/logout';
import { shade } from 'polished'
import Switch from 'react-switch'
import themes from '../styles/themes/light';
import { changeTheme } from '../redux/slice/themeSelect';
import {
  NavbarDiv,
  NavBarProducs,
  NavBarOrders,
  NavBarProfile,
  NavBarCheckout,
  ChangeTheme,
} from '../styles/navBarStyles/NavBarStyles';

export default function Navbar({ menu }) {
  const dispatch = useDispatch();

  const productsSold = useSelector(({ productCartReducer }) => (
    productCartReducer.subtotalCartList)).filter((product) => product.subtotal > 0);
  
  const theme = useSelector(({ themeSelectReducer }) => (
    themeSelectReducer.themeTitle
  ));

  const [darkModeON, setDarkModeOn] = useState(theme === 'light' ? false : true)
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
    <NavBarOrders config={navbarConfig.saller.orders} pathname={pathname}>
      <div data-testid="customer_products__element-navbar-link-orders">
        <h2>Gerenciar Usuários</h2>
      </div>
    </NavBarOrders>
  );

  const renderSeller = (
    <NavBarOrders config={navbarConfig.saller.orders} pathname={pathname}>
      <Link
        to="/seller/orders"
        data-testid="customer_products__element-navbar-link-orders"
      >
        <h2>Pedidos</h2>
      </Link>
    </NavBarOrders>
  );

  const renderCustomer = (
    <>
      <NavBarProducs pathname={pathname}>
        <Link
          to="/customer/products"
          data-testid="customer_products__element-navbar-link-products"
        >
          <h2>Produtos</h2>
        </Link>
      </NavBarProducs>
      <NavBarOrders config={navbarConfig.costumer.orders} pathname={pathname}>
        <Link
          to="/customer/orders"
          data-testid="customer_products__element-navbar-link-orders"
        >
          <h2>Meus Pedidos</h2>
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

      <ChangeTheme pathname={pathname}>
        <label htmlFor="change-theme">Alterar Tema</label>
        <Switch
          id="change-theme"
          onChange={toggleTheme}
          checked={darkModeON}
          checkedIcon={false}
          uncheckedHandleIcon={false}
          height={15}
          handleDiameter={20}
          onColor={themes.colors.secundary}
          offColor={shade(0.15, themes.colors.primary)}
        />
      </ChangeTheme>
      {renderByRole()}
      <NavBarProfile>
        <div>
          <h4>Usuário:</h4>
          <h4 data-testid="customer_products__element-navbar-user-full-name">
            {userName}
          </h4>
        </div>
      </NavBarProfile>
      <NavBarCheckout>
        <button
          id="checkout-button"
          type="button"
          onClick={() => clearAndRedirect()}
          data-testid="customer_products__element-navbar-link-logout"
        >
          {logout}
        </button>
        <label htmlFor="checkout-button">Sair</label>
      </NavBarCheckout>
    </NavbarDiv>
  );
}
