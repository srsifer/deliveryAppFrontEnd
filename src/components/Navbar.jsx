import React, { useState, useEffect } from 'react';
import { useHistory, Redirect, Link } from 'react-router-dom';

import {
  NavbarDiv,
  NavBarProducs,
  NavBarOrders,
  NavBarProfile,
  NavBarCheckout,
} from '../styles/navBarStyles/NavBarStyles';

export default function Navbar() {
  const [redirectOn, setRedirectOn] = useState(false);
  const [userName, setUserName] = useState();
  const { pathname } = useHistory().location;

  useEffect(() => {
    const { name } = JSON.parse(localStorage.getItem('user'));
    setUserName(name);
  }, []);

  const clearAndRedirect = () => {
    localStorage.clear();
    setRedirectOn(true);
  };

  const renderAdmin = (
    <NavBarOrders>
      <div data-testid="customer_products__element-navbar-link-orders">
        <h3>Gerenciar Usuários</h3>
      </div>
    </NavBarOrders>
  );

  const renderSeller = (
    <NavBarOrders>
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
      <NavBarProducs>
        <Link
          to="/customer/products"
          data-testid="customer_products__element-navbar-link-products"
        >
          <h3>Produtos</h3>
        </Link>
      </NavBarProducs>
      <NavBarOrders>
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

  return (
    <NavbarDiv>

      { redirectOn ? <Redirect to="/login" /> : null }
      { renderByRole() }

      <NavBarProfile>
        <h3 data-testid="customer_products__element-navbar-user-full-name">
          {userName}
        </h3>
      </NavBarProfile>
      <NavBarCheckout>
        <button
          type="button"
          onClick={ () => clearAndRedirect() }
          data-testid="customer_products__element-navbar-link-logout"
        >
          sair
        </button>
      </NavBarCheckout>
    </NavbarDiv>
  );
}
