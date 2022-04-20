import styled from 'styled-components';
import backgroud2 from '../../images/backgroud2.jpg'
export const StyleDivProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  width: 100%;
  background-image: url(${backgroud2});
  background-repeat: no-repeat;
  background-size: 350ex;
  background-position: center;
`;

export const StyleDivTotalPrice = styled.div`
  background-color: #036b52;
  color: white;
  position: fixed;
  bottom: 0;
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
  background-color: #036b52; /* Green */
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 30px;
`;
