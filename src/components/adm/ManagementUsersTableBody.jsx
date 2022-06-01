import React from 'react';
import PropTypes from 'prop-types';
import {
  ButtonTableRemoveItem,
  TdDescription,
  TdIten,
  TdRemoveItem,
  TdTotalPrice
} from '../../styles/tablestyles/tableSltyles';

export default function ManagementUsersTableBody(props) {
  const { user, deleteUser, index } = props;
  const { id, name, email, role } = user;

  const datId = 'admin_manage__element-user-table';

  return (
    <tr key={ index }>
      <TdIten data-testid={ `${datId}-item-number-${index}` }>
        {index + 1}
      </TdIten>
      <TdDescription data-testid={ `${datId}-name-${index}` }>
        {name}
      </TdDescription>
      <TdDescription data-testid={ `${datId}-email-${index}` }>
        {email}
      </TdDescription>
      <TdTotalPrice data-testid={ `${datId}-role-${index}` }>
        {role}
      </TdTotalPrice>
      <TdRemoveItem>
        <ButtonTableRemoveItem
          type="button"
          onClick={ () => deleteUser(id) }
          data-testid={ `${datId}-remove-${index}` }
        >
          Excluir
        </ButtonTableRemoveItem>
      </TdRemoveItem>
    </tr>
  );
}

ManagementUsersTableBody.propTypes = ({
  products: PropTypes.arrayOf(PropTypes.object),
  index: PropTypes.number,
  deleteUser: PropTypes.func,
}).isRequired;
