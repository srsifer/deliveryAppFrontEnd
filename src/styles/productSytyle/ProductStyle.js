import styled from 'styled-components';

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

export const TotalButton = styled.button`
  background-color: ${props => props.theme.colors.primary};
  bottom: 0;
  cursor: pointer;
  display: ${props => props.totalPrice === '0,00' ? 'none' : 'flex'};
  position: fixed;
  padding: 25px;
  gap: 20px;
  right: 0;
  width: auto;
  height: 30px;
  border-radius: 10px;
  font-size: 30px;
  align-items: center;
  justify-content: center;
  border: none;
  color: ${props => props.theme.font.primary};
  text-decoration: none;
`;


