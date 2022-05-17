import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import OrderDetailsTable from '../../components/customers/OrderDetailsTable';
import Navbar from '../../components/Navbar';
import socket from '../../utils/socketClient';
import { getOrderById } from '../../services/apiCalls';
import {TotalDiv} from '../../styles/tablestyles/Checkout'
import {
  DetailsOrderDiv,
  InfoOrderDeshboard,
  MarkSenddButton,
} from '../../styles/orderDetails/OrderDetailsPageStyles'

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
      <>
      <Navbar />
    <DetailsOrderDiv>
      <div>
        <h2>
          Detalhes do pedido
        </h2>
        <InfoOrderDeshboard>
          <p
            data-testid={ `${datId}-details-label-order-id` }
          >
            {`Numero ${order.id}`}
          </p>
          <p
            data-testid={ `${datId}-details-label-seller-name` }
          >
           {` Vendedor(a) ${sellerName}`}
          </p>
          <p
            data-testid={ `${datId}-details-label-order-date` }
          >
            {` Data ${order.saleDate}`}
          </p>
          <p
            data-testid={ `${datId}-details-label-delivery-status` }
          >
            {` Status  ${order.status}`}
          </p>
          <MarkSenddButton
            type="button"
            value="Entregue"
            disabled={ order.status !== 'Em Trânsito' }
            onClick={ (e) => changeStatus(e) }
            data-testid="customer_order_details__button-delivery-check"
          >
            Marcar como entregue
          </MarkSenddButton>
        </InfoOrderDeshboard>
        <OrderDetailsTable products={ products } datId={ datId } />
        <TotalDiv data-testid="customer_order_details__element-order-total-price">
          {
            `Total: ${Number(order.totalPrice)
              .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
          }
        </TotalDiv>
            </div>
      </DetailsOrderDiv>
      </>
  );
}
