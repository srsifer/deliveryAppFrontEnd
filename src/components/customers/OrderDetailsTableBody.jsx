import React from 'react';
import PropTypes from 'prop-types';

export default function
OrderDetailsTableBody({ product, index, datId }) {
  const { name, salesProducts: { quantity }, price } = product;

  return (
    <tr key={ index }>
      <td
        data-testid={ `${datId}-table-item-number-${index}` }
      >
        {index + 1}
      </td>
      <td
        data-testid={ `${datId}-table-name-${index}` }
      >
        {name}
      </td>
      <td
        data-testid={ `${datId}-table-quantity-${index}` }
      >
        {quantity}
      </td>
      <td
        data-testid={ `${datId}-table-unit-price-${index}` }
      >
        {price.replace('.', ',')}
      </td>
      <td
        data-testid={ `${datId}-table-sub-total-${index}` }
      >
        {(Number(price) * (quantity)).toFixed(2) }
      </td>
    </tr>
  );
}

OrderDetailsTableBody.propTypes = ({
  products: PropTypes.arrayOf(PropTypes.object),
  index: PropTypes.number,
  datId: PropTypes.string,
}).isRequired;
