import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import NavBar from '../../components/Navbar';
import { MenuP } from '../../styles/navBarStyles/NavBarStyles'
import ProductList from '../../components/customers/ProductList';
import menu from '../../images/menuIcon'
import {
  StyleDivTotalPrice,
  TotalButton,
} from '../../styles/productSytyle/ProductStyle';
import Footer from '../../components/customers/Footer';

export default function Products() {
  const totalPrice = useSelector(({ productCartReducer }) => (
    productCartReducer.totalPrice)).toFixed(2).toString().replace('.', ',');
  const [show, setShow] = useState(false)
  const toggleMenu = () => {
    setShow(!show)
  }
  return (
    <>
      <NavBar menu={show} />
      <input
        type="checkbox"
        id="check"
        hidden
      />
      <MenuP htmlFor="check"
        onClick={toggleMenu}
      >{menu}</MenuP>
      <ProductList />
      <Link
        to="/customer/checkout"
        data-testid="customer_products__checkout-bottom-value"
      >
        <StyleDivTotalPrice>
          <h2>ver carrinho: R$</h2>

          <TotalButton
            type="button"
            disabled={totalPrice === '0,00'}
            onClick={() => localStorage.setItem('total', JSON.stringify(totalPrice))}
            data-testid="customer_products__button-cart"
          >
            {totalPrice}
          </TotalButton>
        </StyleDivTotalPrice>
      </Link>
      <Footer />
    </>
  );
}
