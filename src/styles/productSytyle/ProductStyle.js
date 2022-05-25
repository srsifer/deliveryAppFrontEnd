import styled from 'styled-components';
import backgroud2 from '../../images/backgroud2.jpg'
import backgroud1 from '../../images/backgroudTelaLoginDeliveryApp.jpg'

export const StyleDivProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: ${props => props.theme.colors.background};
  background-repeat: no-repeat;
  background-size: 350ex;
  background-position: center;
  @media (max-width: 600px){
  /* mobile screen */
  background-color: ${props => props.theme.colors.background};
  }
`;

export const StyleDivTotalPrice = styled.div`
  background-color: ${props => props.theme.colors.secundary};
  bottom: 0;
  cursor: pointer;
  color: white;
  position: fixed;
  right: 0;
  width: 300px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const TotalButton = styled.button`
  background-color: ${props => props.theme.colors.secundary}; /* Green */
  border: none;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-size: 30px;
  text-align: center;
  text-decoration: none;
`;


