import styled from 'styled-components';
import backgroudCerveja from '../../images/backgroudDeliveryapp.jpg'
import logo from '../../images/logoPngDeliveryApp.png';

export const BodyPage = styled.div`
body {
  background-color: ${props => props.theme.font.color.primary};
  width: 100%;
  height: 100%;
}
`;

export const LoguinDiv = styled.div`
  background-image: url(${backgroudCerveja});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
@media (max-width: 600px){
  background-image: url(${backgroudCerveja});
  background-size: 165ex;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
}
`;

export const InputsDiv = styled.div`
  @media (min-width: 600px){
  border-radius: 0 15px 15px 0;
  background-color: rgba(0,20,39, 0.75);
  background-size: 150ex;
  left: -500px;
  transition: all 1s linear;
  transform: translateX(${props => props.transition});
  width: 500px;
  height: 100%;
  position: absolute;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  div {
    align-items: center;
    align-content: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
  }
  h2 {
    color: white;
    margin: 10px 0 0 0;
    font-size: 16px;
    font-weight: bold;
  }
  p {
    font-size: 16px;
    color: red;
    font-weight: bold;
  }
}

@media (max-width: 600px){
  /* mobile screen */
  left: 0; right: 0;
  height: 700px;
  position: absolute;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

`;
export const Inputs = styled.input`
  display:flex;
  flex-direction: column;
  width: 95%;
  height: 50px;
  padding: 3px;
  margin: 10px 10px 10px 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 20px;

  @media (max-width: 600px){
  /* mobile screen */
  display:flex;
  flex-direction: column;
  width: 95%;
  height: 50px;
  padding: 3px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 20px;
  }
`;

export const LogoDoApp = styled.div`
  width: 95%;
  height: 300px;
  text-align: center;
  background-image: url(${logo});
  background-size: 90%;

  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 600px){
    /* mobile screen */
    bot:80%;
  }
`;

export const DivButonsLoguin = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ButonsSend = styled.button`
  border-style: none;
  width: 50%;
  height: 50px;
  border-radius: 10px;
  font-size: 30px;
  color: ${props => props.theme.font.color.secundary};
  margin:15px;
  background-color: rgba(246,148,60, 0.75);
  :disabled {
    opacity: 0.7;
    :hover {
      background-color: rgba(246,148,60, 0.75);
      color: ${props => props.theme.font.color.secundary};
      border: none;
      cursor: default;
    }
  }
  :hover {
    background-color: ${props => props.theme.font.color.secundary};
    color: ${props => props.theme.font.color.primary};
    border: 2px solid ${props => props.theme.font.color.primary};
    cursor: pointer;
  }
  @media (max-width: 600px){
    /* mobile screen */
    background-color: #de3163;
    }
`;

export const ButonsRegister = styled(ButonsSend)`
  width: 100%;
`;

export const ToLoginPageButton = styled(ButonsSend)`
  width: 100%;
  margin: 0;
`;
