import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import NavBar from '../../components/Navbar';
import { MenuP } from '../../styles/navBarStyles/NavBarStyles';
import ProductList from '../../components/customers/ProductList';
import menu from '../../images/menuIcon';
import { TotalButton } from '../../styles/productSytyle/ProductStyle';
import cart from '../../images/cart';

export default function Products() {
  const totalPrice = useSelector(({ productCartReducer }) => (
    productCartReducer.totalPrice)).toFixed(2).toString().replace('.', ',');
  const [show, setShow] = useState(false);

  const toggleMenu = () => {
    setShow(!show);
  }

  return (
    <>
      <NavBar menu={show} />
      <input
        type="checkbox"
        id="check"
        hidden
      />
      <MenuP htmlFor="check" onClick={toggleMenu}>
        {menu}
      </MenuP>
      <ProductList />
      <Link
        to="/customer/checkout"
        data-testid="customer_products__checkout-bottom-value"
      >
        <TotalButton
          totalPrice={totalPrice}
          type="button"
          onClick={() => localStorage.setItem('total', JSON.stringify(totalPrice))}
          data-testid="customer_products__button-cart"
        >
          {cart} R$ {totalPrice}
        </TotalButton>
      </Link>
    </>
  );
}
