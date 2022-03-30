import React from 'react';
import PropTypes from 'prop-types';

export default function
ManagementUsersTableBody({ user, deleteUser, index }) {
  const { id, name, email, role } = user;

  const datId = 'admin_manage__element-user-table';

  return (
    <tr key={ index }>
      <td data-testid={ `${datId}-item-number-${index}` }>
        {index + 1}
      </td>
      <td data-testid={ `${datId}-name-${index}` }>
        {name}
      </td>
      <td data-testid={ `${datId}-email-${index}` }>
        {email}
      </td>
      <td data-testid={ `${datId}-role-${index}` }>
        {role}
      </td>
      <td>
        <button
          type="button"
          onClick={ () => deleteUser(id) }
          data-testid={ `${datId}-remove-${index}` }
        >
          Excluir
        </button>
      </td>
    </tr>
  );
}

ManagementUsersTableBody.propTypes = ({
  products: PropTypes.arrayOf(PropTypes.object),
  index: PropTypes.number,
  deleteUser: PropTypes.func,
  datId: PropTypes.string,
}).isRequired;
