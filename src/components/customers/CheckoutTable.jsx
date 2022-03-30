import React from 'react';
import PropTypes from 'prop-types';
import CheckoutTableBody from './CheckoutTableBody';

export default function CheckoutTable({ productsSold }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>valor Unitarío</th>
          <th>Sub-total</th>
          <th>Removeritem</th>
        </tr>
      </thead>
      <tbody>
        {
          productsSold.map((product, index) => (
            <CheckoutTableBody product={ product } key={ index } index={ index } />))
        }
      </tbody>
    </table>
  );
}

CheckoutTable.propTypes = ({
  productsSold: PropTypes.arrayOf(PropTypes.object),
}).isRequired;
