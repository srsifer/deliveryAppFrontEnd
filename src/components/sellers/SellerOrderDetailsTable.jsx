import React from 'react';
import PropTypes from 'prop-types';
import SellerOrderDetailsTableBody from './SellerOrderDetailsTableBody';

export default function SellerOrderDetailsTable({ products, datId }) {
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
            <SellerOrderDetailsTableBody
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

SellerOrderDetailsTable.propTypes = ({
  products: PropTypes.arrayOf(PropTypes.object),
  datId: PropTypes.string,
}).isRequired;
