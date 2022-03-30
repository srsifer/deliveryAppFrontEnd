import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import NavBar from '../../components/Navbar';
import ProductList from '../../components/customers/ProductList';

export default function Products() {
  const totalPrice = useSelector(({ productCartReducer }) => (
    productCartReducer.totalPrice)).toFixed(2).toString().replace('.', ',');

  return (
    <>
      <NavBar />
      <ProductList />
      <h2>ver carrinho: R$</h2>
      <Link
        to="/customer/checkout"
        data-testid="customer_products__checkout-bottom-value"
      >
        <button
          type="button"
          disabled={ totalPrice === '0,00' }
          onClick={ () => localStorage.setItem('total', JSON.stringify(totalPrice)) }
          data-testid="customer_products__button-cart"
        >
          { totalPrice }
        </button>
      </Link>
    </>
  );
}
