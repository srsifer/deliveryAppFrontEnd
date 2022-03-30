import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { getOrdersByUser } from '../../services/apiCalls';
import socket from '../../utils/socketClient';

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const apiCall = async () => {
      const response = await getOrdersByUser();
      if (response.error) {
        console.log(response.error);
      } else {
        setOrders(response);
      }
    };
    apiCall();
  }, []);

  const shouldUpdateOrders = orders.length > 0;

  useEffect(() => {
    socket.on('updatedOrders', (updatedOrders) => {
      setOrders(updatedOrders);
    });
  }, [shouldUpdateOrders]);

  return (
    <div>
      <Navbar />
      {
        orders.map((order, index) => (
          <Link
            key={ index }
            to={ `/customer/orders/${order.id}` }
          >
            <div
              key={ index }
            >
              <p data-testid={ `customer_orders__element-order-id-${order.id}` }>
                { order.id }
              </p>
              <p data-testid={ `customer_orders__element-delivery-status-${order.id}` }>
                { order.status }
              </p>
              <p data-testid={ `customer_orders__element-order-date-${order.id}` }>
                { order.saleDate }
              </p>
              <p data-testid={ `customer_orders__element-card-price-${order.id}` }>
                { order.totalPrice.replace('.', ',') }
              </p>
            </div>
          </Link>
        ))
      }
    </div>
  );
}
