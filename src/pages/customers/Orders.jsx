import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { getOrdersByUser } from '../../services/apiCalls';
import socket from '../../utils/socketClient';
import {
  DivAllOrders, 
  IdDivOrder,
  OrderDateAndPrice,
  OrderDiv,

} from '../../styles/ordersStyles/orderStyles'
import StatusOrder from '../../components/customers/StatusOrder';

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
      <DivAllOrders>
        {
          orders.map((order, index) => (
            <Link
              key={index}
              to={`/customer/orders/${order.id}`}
            >
              <OrderDiv
                key={index}
              >
                <IdDivOrder data-testid={`customer_orders__element-order-id-${order.id}`}>
                  {order.id}
                </IdDivOrder>
                <StatusOrder order={order}/>
                <OrderDateAndPrice>
                  <p data-testid={`customer_orders__element-order-date-${order.id}`}>
                    {order.saleDate}
                  </p>
                  <p data-testid={`customer_orders__element-card-price-${order.id}`}>
                   Total: R$ {order.totalPrice.replace('.', ',')}
                  </p>
                </OrderDateAndPrice>
              </OrderDiv>
            </Link>
          ))
        }
      </DivAllOrders>
    </div>
  );
}
