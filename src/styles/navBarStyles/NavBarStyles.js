import styled from 'styled-components';
import logout from '../../images/logout.png'
export const NavbarDiv = styled.div`
  color: white;
  top: 0 !important;
  position: relative !important;
  width: 100%;
    a {
      color: white;
      text-decoration: none;
    }
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: stretch;
  @media (max-width: 600px){
  /* mobile screen */
  position: fixed !important;
  }
`;

export const NavBarProducs = styled.div`
  background-color: #DFFF00;
  width: 20%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: stretch;
  @media (max-width: 600px){
  /* mobile screen */
    height: 70px;
  }
`;

export const NavBarOrders = styled(NavBarProducs)`
  background-color: #FFBF00;
  width: 50%;
`;

export const NavBarProfile = styled(NavBarOrders)`
  background-color: #FF7F50;
  width: 20%;
`;

export const NavBarCheckout = styled(NavBarOrders)`
  width: 10%;
  background-color: #DE3163;
  button {
    border: none;
    background-image: url(${logout});
    background-repeat: no-repeat;
    background-size: 50px;
  }
`;
