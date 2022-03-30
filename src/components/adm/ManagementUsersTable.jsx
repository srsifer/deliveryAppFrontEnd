import React from 'react';
import PropTypes from 'prop-types';
import ManagementUsersTableBody from './ManagementUsersTableBody';

export default function ManagementUsersTable({ users, deleteUser }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Nome</th>
          <th>E-mail</th>
          <th>Tipo</th>
          <th>Excluir</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map((user, index) => (
            <ManagementUsersTableBody
              key={ index }
              user={ user }
              deleteUser={ deleteUser }
              index={ index }
            />
          ))
        }
      </tbody>
    </table>
  );
}

ManagementUsersTable.propTypes = ({
  products: PropTypes.arrayOf(PropTypes.object),
  deleteUser: PropTypes.func,
}).isRequired;
