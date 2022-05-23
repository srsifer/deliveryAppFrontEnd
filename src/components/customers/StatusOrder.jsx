import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { StatusOrderStyles } from '../../styles/ordersStyles/orderStyles'

export default function StatusOrder(props) {
  const { order: { status, id } } = props;
  const [theme, setTheme] = useState('#d3c63c');

  useEffect(() => {
    const selectBackground = () => {
      if (status === 'Preparando') (setTheme('#87d53c'));
      if (status === 'Entregue') (setTheme('#3bd5b0'));
      if (status === 'Em Trânsito') (setTheme('#E8520D'));
    };
    selectBackground();
  }, [status]);

  return (
    <StatusOrderStyles
      status={ theme }
      data-testid={`customer_orders__element-delivery-status-${id}`}
    >
      {status}
    </StatusOrderStyles>
  )
}

StatusOrder.propTypes = ({
  status: PropTypes.string,
  id: PropTypes.string,
}).isRequired;
