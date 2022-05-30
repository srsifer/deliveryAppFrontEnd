import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { registerValidation } from '../utils/inputValidations';
import { apiRegister } from '../services/apiCalls';
import {
  LoguinDiv,
  LogoDoApp,
  InputsDiv,
  DivButonsLoguin,
  Inputs,
  ButonsRegister,
  ToLoginPageButton,
} from '../styles/login/Loguinstyles';
import { useEffect } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function RegisterUser() {
  const [hiddenOn, setHiddenOn] = useState(true);
  const [redirectOn, setRedirectOn] = useState(false);
  const [transition, setTransition] = useState('0px');
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

  useEffect(() => {
    setTransition('500px');
  })

  return (
    <LoguinDiv>
      <InputsDiv transition={transition}>
       <LogoDoApp/>
        { redirectOn ? <Redirect to="/customer/products" /> : null }
        <div>
          <h2>Nome e sobrenome</h2>
          <Inputs
            name="name"
            type="name"
            value={ newUser.name }
            onChange={ handleChange }
            placeholder="Ao menos 12 caracteres"
            data-testid="common_register__input-name"
          />
          <h2>Email</h2>
          <Inputs
            name="email"
            type="text"
            value={ newUser.email }
            onChange={ handleChange }
            placeholder="Insira um email válido"
            data-testid="common_register__input-email"
          />
          <h2>Senha</h2>
          <Inputs
            name="password"
            type="password"
            value={ newUser.password }
            onChange={ handleChange }
            placeholder="Ao menos 6 caracteres"
            data-testid="common_register__input-password"
          />
          <p
            hidden={ hiddenOn }
            data-testid="common_register__element-invalid_register"
          >
            Email já cadastrado.
          </p>
        </div>
        <DivButonsLoguin>
          <ButonsRegister
            type="submit"
            disabled={ switchDisabledButton() }
            onClick={ () => sendRegister() }
            data-testid="common_register__button-register"
          >
            Criar Conta
          </ButonsRegister>
          <Link to="/">
            <ToLoginPageButton
              type="button"
              data-testid="common_login__button-register"
              >
                Já tenho conta
            </ToLoginPageButton>
          </Link>
        </DivButonsLoguin>
      </InputsDiv>
    </LoguinDiv>
  );
}
