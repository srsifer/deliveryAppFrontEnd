import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { loginValidation } from '../utils/inputValidations';
import { apiLogin } from '../services/apiCalls';
import {
  LoguinDiv,
  Inputs,
  ButonsSend,
  ButonsRegister,
} from '../styles/login/Loguinstyles';

export default function Login() {
  const [hiddenOn, setHiddenOn] = useState(true);
  const [connectionOn, setConnectionOn] = useState();
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user !== undefined) {
      setConnectionOn(user);
    }
  }, []);

  const validatePassword = ({ target: { name, value } }) => {
    setLogin({ ...login,
      [name]: value,
    });
  };

  function handleLoginValidation() {
    const validationError = loginValidation(login).error;
    if (validationError) return true;
    return false;
  }

  const setRedirectPath = (role) => {
    if (role === 'administrator') return '/admin/manage';
    if (role === 'seller') return '/seller/orders';
    return '/customer/products';
  };

  const sendLogin = async () => {
    const response = await apiLogin(login);
    if (response.error) {
      setHiddenOn(false);
    } else {
      const { token, user: { id, name, email, role } } = response;
      const userData = { id, name, email, role, token };
      localStorage.setItem('user', JSON.stringify(userData));
      setConnectionOn(userData);
    }
  };

  return (
    <LoguinDiv>

      { connectionOn && <Redirect to={ setRedirectPath(connectionOn.role) } /> }

      <p
        hidden={ hiddenOn }
        data-testid="common_login__element-invalid-email"
      >
        invalid credential
      </p>
      <div>
        <Inputs
          name="email"
          type="text"
          onChange={ validatePassword }
          placeholder="Insira seu e-mail"
          data-testid="common_login__input-email"
        />
        <Inputs
          name="password"
          type="password"
          onChange={ validatePassword }
          placeholder="Insira sua senha"
          data-testid="common_login__input-password"
        />
      </div>
      <ButonsSend
        type="submit"
        disabled={ handleLoginValidation() }
        onClick={ () => sendLogin() }
        data-testid="common_login__button-login"
      >
        login
      </ButonsSend>
      <Link to="/register">
        <ButonsRegister
          type="submit"
          data-testid="common_login__button-register"
        >
          Ainda não tenho conta
        </ButonsRegister>
      </Link>
    </LoguinDiv>
  );
}
