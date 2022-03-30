import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import OrderDetailsTable from '../../components/customers/OrderDetailsTable';
import Navbar from '../../components/Navbar';
import socket from '../../utils/socketClient';
import { getOrderById } from '../../services/apiCalls';

export default function OrderDetails() {
  const [order, setOrder] = useState([]);
  const [sellerName, setSellerName] = useState([]);
  const [products, setProducts] = useState([]);
  const params = useParams();

  useEffect(() => {
    const apiCall = async () => {
      const response = await getOrderById(params.id);
      if (response.error) {
        console.log(response.error);
      } else {
        setOrder(response);
        setSellerName(response.seller.name);
        setProducts(response.products);
      }
    };
    apiCall();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    socket.on('updatedStatus', ({ status }) => {
      setOrder({ ...order, status });
    });
  }, [order]);

  const changeStatus = ({ target: { value: newStatus } }) => {
    const { id: userId } = JSON.parse(localStorage.getItem('user'));
    socket.emit('changeStatus', ({ userId, orderId: order.id, status: newStatus }));
  };

  const datId = 'customer_order_details__element-order';

  return (
    <div>
      <Navbar />
      <h2>
        Detalhe do pedido
      </h2>
      <div>
        <p
          data-testid={ `${datId}-details-label-order-id` }
        >
          {order.id}
        </p>
        <p
          data-testid={ `${datId}-details-label-seller-name` }
        >
          {sellerName}
        </p>
        <p
          data-testid={ `${datId}-details-label-order-date` }
        >
          {order.saleDate}
        </p>
        <p
          data-testid={ `${datId}-details-label-delivery-status` }
        >
          {order.status}
        </p>
        <button
          type="button"
          value="Entregue"
          disabled={ order.status !== 'Em Trânsito' }
          onClick={ (e) => changeStatus(e) }
          data-testid="customer_order_details__button-delivery-check"
        >
          Marcar como entregue
        </button>
      </div>
      <OrderDetailsTable products={ products } datId={ datId } />
      <p data-testid="customer_order_details__element-order-total-price">
        {
          `Total: ${Number(order.totalPrice)
            .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
        }
      </p>
    </div>
  );
}
