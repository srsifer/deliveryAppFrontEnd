import React from 'react';
import PropTypes from 'prop-types';
import CheckoutTableBody from './CheckoutTableBody';
import { TableDiv } from '../../styles/tablestyles/tableSltyles';

export default function CheckoutTable(props) {
  const { productsSold } = props;

  return (
    <TableDiv>
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor unitário</th>
          <th>Sub-total</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          productsSold.map((product, index) => (
            <CheckoutTableBody
              product={ product }
              key={ index }
              index={ index }
            />
          ))
        }
      </tbody>
    </TableDiv>
  );
}

CheckoutTable.propTypes = ({
  productsSold: PropTypes.arrayOf(PropTypes.object),
}).isRequired;
