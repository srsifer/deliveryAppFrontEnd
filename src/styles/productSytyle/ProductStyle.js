import styled from 'styled-components';

export const StyleDivProduct = styled.div`
  align-items: center;
  background-color: ${props => props.theme.colors.background};
  background-repeat: no-repeat;
  background-size: 350ex;
  background-position: center;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (max-width: 600px){
  /* mobile screen */
  background-color: ${props => props.theme.colors.background};
  }
`;

export const TotalButton = styled.button`
  background-color: ${props => props.theme.colors.primary};
  bottom: 10px;
  cursor: pointer;
  display: ${props => props.totalPrice === '0,00' ? 'none' : 'flex'};
  position: fixed;
  padding: 25px;
  gap: 20px;
  right: 10px;
  width: auto;
  height: 30px;
  border-radius: 10px;
  font-size: 30px;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  color: ${props => props.theme.font.primary};
  text-decoration: none;
  :hover {
    opacity: 0.80;
    transform: scale(1.05);
    transition-duration: 300ms;
  }
`;


