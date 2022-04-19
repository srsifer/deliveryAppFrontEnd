import styled from 'styled-components';
import backgroudCerveja from '../../images/backgroudTelaLoginDeliveryApp.jpg'
import logo from '../../images/logoPngDeliveryApp.png';

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
border-radius: 15px;
background-color: #FFBF00;
background-size: 150ex;
box-shadow: 0 0 1em #FFBF00;
width: 500px;
height: 700px;
position: absolute;
top: 12%;
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

export const DivButonsLoguin = styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
export const LogoDoApp = styled.div`
width: 80%;
height: 300px;
text-align: center;
background-image: url(${logo});
background-size: 75%;

background-repeat: no-repeat;
background-position: center;
@media (max-width: 600px){
  /* mobile screen */
  bot:80%;
  }
`;
export const ButonsSend = styled.button`
border-style: none;
width: 50%;
height: 50px;
border-radius: 10px;
font-size: 30px;
color: white;
margin:15px;
background-color: #40E0D0;
:hover {
  background-color: white;
  color: #40E0D0;
  border: 2px solid #40E0D0;
}
@media (max-width: 600px){
  /* mobile screen */
  background-color: #de3163;
  }
`;

export const ButonsRegister = styled(ButonsSend)`
width: 100%;
`;
