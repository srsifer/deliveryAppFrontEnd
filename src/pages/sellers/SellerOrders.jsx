import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import StatusOrder from '../../components/customers/StatusOrder';
import Navbar from '../../components/Navbar';
import { getOrdersByUser } from '../../services/apiCalls';
import {
  DivAllOrders,
  IdDivOrder,
  OrderDateAndPrice,
  OrderDiv,
  DivAdressCardOrder
} from '../../styles/ordersStyles/orderStyles';
import socket from '../../utils/socketClient';

export default function SellerOrders() {
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
      <DivAllOrders>
      {
        orders.map((order, index) => (
          <Link
            key={ index }
            to={ `/seller/orders/${order.id}` }
          >
            <OrderDiv
              key={ index }
            >
              <IdDivOrder data-testid={ `seller_orders__element-order-id-${order.id}` }>
                { order.id }
              </IdDivOrder>
              <StatusOrder order={order}/>
              <OrderDateAndPrice>
                <p data-testid={ `seller_orders__element-order-date-${order.id}` }>
                  { order.saleDate }
                </p>
                <p data-testid={ `seller_orders__element-card-price-${order.id}` }>
                  Total: R$ { order.totalPrice.replace('.', ',') }
                </p>
              </OrderDateAndPrice>
              <DivAdressCardOrder>
                <p data-testid={ `seller_orders__element-card-address-${order.id}` }>
                  {order.deliveryAddress}, {order.deliveryNumber}
                </p>
              </DivAdressCardOrder>
            </OrderDiv>
          </Link>
        ))
      }
      </DivAllOrders>
    </div>
  );
}
