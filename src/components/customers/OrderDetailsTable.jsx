import React from 'react';
import PropTypes from 'prop-types';
import OrderDetailsTableBody from './OrderDetailsTableBody';

export default function OrderDetailsTable({ products, datId }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>valor Unitarío</th>
          <th>Sub-total</th>
        </tr>
      </thead>
      <tbody>
        {
          products.map((product, index) => (
            <OrderDetailsTableBody
              key={ index }
              product={ product }
              index={ index }
              datId={ datId }
            />
          ))
        }
      </tbody>
    </table>
  );
}

OrderDetailsTable.propTypes = ({
  products: PropTypes.arrayOf(PropTypes.object),
  datId: PropTypes.string,
}).isRequired;
