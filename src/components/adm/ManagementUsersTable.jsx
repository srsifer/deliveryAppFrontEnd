import React from 'react';
import PropTypes from 'prop-types';
import ManagementUsersTableBody from './ManagementUsersTableBody';
import { TableDivAdm } from '../../styles/admStyles/admStyles';

export default function ManagementUsersTable(props) {
  const { users, deleteUser } = props;

  return (
    <TableDivAdm>
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
    </TableDivAdm>
  );
}

ManagementUsersTable.propTypes = ({
  products: PropTypes.arrayOf(PropTypes.object),
  deleteUser: PropTypes.func,
}).isRequired;
