import styled from 'styled-components';
import backgroudCerveja from '../../images/backgroudTelaLoginDeliveryApp.jpg'
export const BodyPage = styled.div`
body {
  background-color: black;
  width: 100%;
  height: 100%;
  border: 1px solid black;
}
`;

export const LoguinDiv = styled.div`
background-image: url(${backgroudCerveja});
background-size: 100% 100%;
background-repeat: no-repeat;
width: 100%;
height: 100vh;
`;

export const InputsDiv = styled.div`
@media (min-width: 600px){
border: 1px solid black;
background-color: white;
box-shadow: 0 0 1em #00000099;
width: 400px;
height: 400px;
position: absolute;
top: 25%;
left: 0; right: 0;
margin: auto;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
   p {
     color: red;
   }
}

@media (max-width: 600px){
  /* mobile screen */
  left: 0; right: 0;
  height: 400px;
  position: absolute;
  top: 25%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

`;
export const Inputs = styled.input`
  display:flex;
  flex-direction: column;
  width: 95%;
  height: 50px;
  padding: 3px;
  margin: 10px;
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

export const ButonsSend = styled.button`
border-style: none;
width: 50%;
height: 50px;
border-radius: 10px;
font-size: 30px;
color: white;
background-color: #00ffbf;
:hover {
  background-color: white;
  color: #00ffbf;
  border: 2px solid #00ffbf;
}
`;

export const ButonsRegister = styled.button`
border-style: none;
border: 2px solid #00ffbf;
width: 100%;
height: 50px;
border-radius: 10px;
font-size: 30px;
color: white;
background-color: #00ffbf;
:hover {
  background-color: white;
  color: #00ffbf;
  border: 2px solid #00ffbf;
}
`;
