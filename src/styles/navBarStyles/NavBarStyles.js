import styled from 'styled-components';
import logout from '../../images/logout.png'
export const NavbarDiv = styled.div`
  color: ${props => props.theme.colors.secundary};
  top: 0 !important;
  position: relative !important;
  width: 100%;
    a {
      color: ${props => props.theme.colors.fontColor};
      text-decoration: none;
    }
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: stretch;

  @media (max-width: 600px){
  /* mobile screen */
  position: fixed !important;
  display: ${(props) => props.menu === true ? 'flex' : 'none'};
  flex-direction: column;
  align-items: space-evenly;
  max-width: 100%;
  height:230px;
  border-radius: 10px;
  background-color: black;
  z-index: 0;
  left: 0;
  margin-top: 9%;
  animation-duration: 1;
  }
`;

export const MenuP = styled.label`
position: fixed;
width: 100%;
top:0;
color: white;
border-radius: 0px 0px 10px 10px;
text-align: justify;
background-color:#F61B1B;
z-index:1;
@media (min-width: 600px){
display:none;
}
`;


export const NavBarProducs = styled.div`
  background-color: ${props => props.theme.colors.primary};
  width: 20%;
  display: flex;
  padding-top:15px;
  flex-direction: row;
  justify-content: space-around;
  align-items: stretch;
  @media (max-width: 600px){
  /* mobile screen */
    width: 100%;
    height:70px;
    background-color: #F61B1B !important
  }
`;

export const NavBarOrders = styled(NavBarProducs)`
  background-color: ${props => props.theme.colors.secundary};
  width: ${props => props.config.width};
  @media (max-width: 600px){
  /* mobile screen */
    width: 100%;
    a {
      color: black;
    }
    background-color: #f7f7f7 !important;
  }
`;

export const NavBarProfile = styled(NavBarProducs)`
  background-color: ${props => props.theme.colors.primary};
  width: 20%;
  color: ${props => props.theme.colors.fontColor};
  @media (max-width: 600px){
  /* mobile screen */
  display: none !important;
    width: 100%;
    background-color: #EA0404 !important
  }
`;

export const NavBarCheckout = styled(NavBarProducs)`
  background-color: ${props => props.theme.colors.secundary};
  width: 10%;
  button {
    border: none;
    color: ${props => props.theme.colors.fontColor};
    background-image: url(${logout});
    background-repeat: no-repeat;
    background-size: 50px;
  }
  @media (max-width: 600px){
  /* mobile screen */
    width: 100%;
    background-color: #f7f7f7 !important;
    border-radius: 0px 0px 10px 10px;
  }
`;
