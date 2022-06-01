import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import SellerOrderDetailsTable from '../../components/sellers/SellerOrderDetailsTable';
import { getOrderById } from '../../services/apiCalls';
import {
  DetailsOrderDiv,
  InfoOrderDeshboard,
  MarkSenddButton,
  PrepareOrderButton
} from '../../styles/orderDetails/OrderDetailsPageStyles';
import { TotalDiv } from '../../styles/tablestyles/Checkout';
import socket from '../../utils/socketClient';

export default function OrderDetails() {
  const [order, setOrder] = useState([]);
  const [products, setProducts] = useState([]);
  const params = useParams();

  useEffect(() => {
    const apiCall = async () => {
      const response = await getOrderById(params.id);
      if (response.error) {
        console.log(response.error);
      } else {
        setOrder(response);
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

  const datId = 'seller_order_details__element-order';

  return (
    <>
      <Navbar />
      <DetailsOrderDiv>
        <h2>
          Detalhe do pedido
        </h2>
        <InfoOrderDeshboard>
          <p
            data-testid={`${datId}-details-label-order-id`}
          >
            Id: {order.id}
          </p>
          <p
            data-testid={`${datId}-details-label-order-date`}
          >
            Data: {order.saleDate}
          </p>
          <p
            data-testid={`${datId}-details-label-delivery-status`}
          >
            Status: {order.status}
          </p>
          <PrepareOrderButton
            type="button"
            value="Preparando"
            disabled={order.status !== 'Pendente'}
            onClick={(e) => changeStatus(e)}
            data-testid="seller_order_details__button-preparing-check"
          >
            Preparar pedido
          </PrepareOrderButton>
          <MarkSenddButton
            type="button"
            value="Em Trânsito"
            disabled={order.status !== 'Preparando'}
            onClick={(e) => changeStatus(e)}
            data-testid="seller_order_details__button-dispatch-check"
          >
            Saiu para entrega
          </MarkSenddButton>
        </InfoOrderDeshboard>
        <SellerOrderDetailsTable products={products} datId={datId} />
        <TotalDiv data-testid={`${datId}-total-price`}>
          {
            `Total: ${Number(order.totalPrice)
              .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
          }
        </TotalDiv>
      </DetailsOrderDiv>
    </>
  );
}
