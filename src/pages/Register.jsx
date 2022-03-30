import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { registerValidation } from '../utils/inputValidations';
import { apiRegister } from '../services/apiCalls';
import {
  LoguinDiv,
  Inputs,
  ButonsSend,
} from '../styles/login/Loguinstyles';

export default function RegisterUser() {
  const [hiddenOn, setHiddenOn] = useState(true);
  const [redirectOn, setRedirectOn] = useState(false);
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
    role: 'customer',
  });

  const handleChange = ({ target: { name, value } }) => {
    setNewUser({ ...newUser, [name]: value });
  };

  function switchDisabledButton() {
    const validationError = registerValidation(newUser).error;
    if (validationError) return true;
    return false;
  }

  const sendRegister = async () => {
    const response = await apiRegister(newUser);
    if (response.error) {
      setHiddenOn(false);
    } else {
      const { token, user: { id, name, email, role } } = response;
      const userData = { id, name, email, role, token };
      localStorage.setItem('user', JSON.stringify(userData));
      setRedirectOn(true);
    }
  };

  return (
    <LoguinDiv>

      { redirectOn ? <Redirect to="/customer/products" /> : null }

      <p
        hidden={ hiddenOn }
        data-testid="common_register__element-invalid_register"
      >
        invalid credential
      </p>
      <Inputs
        name="name"
        type="name"
        value={ newUser.name }
        onChange={ handleChange }
        placeholder="Insira um nome"
        data-testid="common_register__input-name"
      />
      <Inputs
        name="email"
        type="text"
        value={ newUser.email }
        onChange={ handleChange }
        placeholder="Insira um e-email"
        data-testid="common_register__input-email"
      />
      <Inputs
        name="password"
        type="password"
        value={ newUser.password }
        onChange={ handleChange }
        placeholder="Insira uma senha"
        data-testid="common_register__input-password"
      />
      <ButonsSend
        type="submit"
        disabled={ switchDisabledButton() }
        onClick={ () => sendRegister() }
        data-testid="common_register__button-register"
      >
        register now
      </ButonsSend>
    </LoguinDiv>
  );
}
