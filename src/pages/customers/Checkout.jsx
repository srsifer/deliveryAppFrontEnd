import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import CheckoutTable from '../../components/customers/CheckoutTable';
import NavBar from '../../components/Navbar';

import { createOrder, getSellers } from '../../services/apiCalls';

export default function Checkout() {
  const productsSold = useSelector(({ productCartReducer }) => (
    productCartReducer.subtotalCartList)).filter((product) => product.subtotal > 0);

  const totalPrice = useSelector(({ productCartReducer }) => (
    productCartReducer.totalPrice));

  const [redirect, setRedirect] = useState(false);
  const [orderId, setIdOrder] = useState('');
  const [sellers, setSellers] = useState([]);
  const [order, setOrder] = useState({
    sellerId: 2,
    totalPrice,
    deliveryAddress: '',
    deliveryNumber: '',
    status: 'Pendente',
    productsSold: productsSold
      .map(({ id: productId, quantity }) => ({ productId, quantity })),
  });

  useEffect(() => {
    const apiCall = async () => {
      const response = await getSellers();
      if (response.error) {
        console.log(response.error);
      } else {
        setSellers(response);
      }
    };
    apiCall();
  }, []);

  const handleChange = ({ name, value }) => {
    if (name === 'select-seller') setOrder({ ...order, sellerId: value });
    if (name === 'customer-address') setOrder({ ...order, deliveryAddress: value });
    if (name === 'customer-address-number') {
      setOrder({ ...order, deliveryNumber: value });
    }
  };

  const sendOrder = async () => {
    const orderDispatched = await createOrder(order);
    setIdOrder(orderDispatched.id);
    setRedirect(true);
  };

  return (
    <>

      { redirect ? <Redirect to={ `/customer/orders/${orderId}` } /> : null }

      <NavBar />
      <h2>Finalizar pedido</h2>
      <CheckoutTable productsSold={ productsSold } />
      Total:
      <div
        data-testid="customer_checkout__element-order-total-price"
      >
        {totalPrice.toFixed(2).toString().replace('.', ',')}
      </div>
      <h2>Detalhes e Endereço para Entrega</h2>
      <select
        name="select-seller"
        onChange={ (e) => handleChange(e.target) }
        data-testid="customer_checkout__select-seller"
      >
        {
          sellers.map(({ id, name }, index) => (
            <option key={ index } value={ id }>
              {name}
            </option>))
        }
      </select>
      <input
        name="customer-address"
        type="text"
        value={ order.deliveryAddress }
        onChange={ (e) => handleChange(e.target) }
        data-testid="customer_checkout__input-address"
      />
      <input
        name="customer-address-number"
        type="number"
        pattern="[0-9]*"
        value={ order.deliveryNumber }
        onChange={ (e) => handleChange(e.target) }
        data-testid="customer_checkout__input-addressNumber"
      />
      <button
        type="button"
        onClick={ () => sendOrder() }
        data-testid="customer_checkout__button-submit-order"
      >
        finalizar pedido
      </button>
    </>
  );
}
