import React from 'react';
import PropTypes from 'prop-types';
import OrderDetailsTableBody from './OrderDetailsTableBody';
import { TableDiv } from '../../styles/tablestyles/tableSltyles';

export default function OrderDetailsTable(props) {
  const { products, datId } = props;

  return (
    <TableDiv>
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor unitário</th>
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
    </TableDiv>
  );
}

OrderDetailsTable.propTypes = ({
  products: PropTypes.arrayOf(PropTypes.object),
  datId: PropTypes.string,
}).isRequired;
