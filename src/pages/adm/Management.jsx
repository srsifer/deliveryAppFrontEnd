import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import { registerValidation } from '../../utils/inputValidations';
import { apiRegisterByAdmin, getUsers, removeUser } from '../../services/apiCalls';
import ManagementUsersTable from '../../components/adm/ManagementUsersTable';

export default function Management() {
  const [hiddenOn, hiddenOnSet] = useState(true);
  const [usersList, setUsersList] = useState([]);
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
    role: 'customer',
  });

  const handleChange = ({ target: { name, value } }) => {
    setNewUser({ ...newUser, [name]: value });
  };

  const apiCall = async () => {
    const response = await getUsers();
    if (response.error) {
      console.log(response.error);
    } else {
      setUsersList(response);
    }
  };

  useEffect(() => {
    apiCall();
  }, []);

  function switchDisabledButton() {
    const validationError = registerValidation(newUser).error;
    if (validationError) return true;
    return false;
  }

  const sendRegister = async () => {
    const response = await apiRegisterByAdmin(newUser);
    if (response.error) {
      hiddenOnSet(false);
    } else {
      apiCall();
      setNewUser({
        name: '',
        email: '',
        password: '',
        role: 'customer',
      });
    }
  };

  const deleteUser = async (id) => {
    await removeUser(id);
    await apiCall();
  };

  return (
    <>
      <div>
        <Navbar />
        <p
          data-testid="admin_manage__element-invalid-register"
          hidden={ hiddenOn }
        >
          Person already registered
        </p>
        <input
          name="name"
          type="text"
          value={ newUser.name }
          onChange={ handleChange }
          placeholder="Nome e sobrenome"
          data-testid="admin_manage__input-name"
        />
        <input
          name="email"
          type="text"
          value={ newUser.email }
          onChange={ handleChange }
          placeholder="E-mail"
          data-testid="admin_manage__input-email"
        />
        <input
          name="password"
          type="password"
          value={ newUser.password }
          onChange={ handleChange }
          placeholder="Insira sua senha"
          data-testid="admin_manage__input-password"
        />
        <select
          name="role"
          value={ newUser.role }
          onChange={ handleChange }
          data-testid="admin_manage__select-role"
        >
          <option value="customer">Cliente</option>
          <option value="seller">Vendedor</option>
          <option value="administrator">Admin</option>
        </select>
        <button
          type="button"
          disabled={ switchDisabledButton() }
          onClick={ () => sendRegister() }
          data-testid="admin_manage__button-register"
        >
          Cadastrar
        </button>
      </div>
      <ManagementUsersTable
        users={ usersList }
        deleteUser={ deleteUser }
      />
    </>
  );
}
