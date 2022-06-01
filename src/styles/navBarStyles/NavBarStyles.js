import styled from 'styled-components';

export const NavbarDiv = styled.div`
  color: ${props => props.theme.colors.secundary};
  top: 0 !important;
  position: relative !important;
  width: 100%;
    a {
      color: ${props => props.theme.font.color.secundary};
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
    background-color: ${props => props.theme.font.color.primary};
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
  color: ${props => props.theme.font.color.secundary};
  border-radius: 0px 0px 10px 10px;
  text-align: justify;
  background-color:#F61B1B;
  z-index:1;

  @media (min-width: 600px){
  display:none;
  }
`;

const NavBarSegments = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 5px;
  width: 28%;
  a {
    align-items: center;
    display: flex;
    justify-content: center;
    text-align: center;
    height: 100%;
    width: 100%;
  }
`;

const selectedBar = (props) => {
  return (
    `opacity: 0.85;
      box-shadow: 0px 10px 6px -2px ${props.theme.title === 'light' ? 'black' : 'white'};
      transition-duration: 400ms;
      h2 {
        color: #FFD700;
        text-shadow: -1px 0 black , 0 1px black , 1px 0 black , 0 -1px black;
        font-weight: bold;
      }`
  )
}

export const NavBarProducs = styled(NavBarSegments)`
  background-color: ${props => props.theme.colors.primary};
  :hover {
    ${selectedBar};
  }
  ${props => props.pathname.includes('products') && selectedBar(props)};

  @media (max-width: 600px){
  /* mobile screen */
    width: 100%;
    height:70px;
    background-color: #F61B1B !important
  }
`;

export const NavBarOrders = styled(NavBarSegments)`
  background-color: ${props => props.theme.colors.secundary};
  color: ${props => props.theme.font.color.secundary};
  width: ${props => props.config.width};
  ${props => props.pathname.includes('admin')
    ? ":hover { opacity: 1 }"
    : `:hover { ${selectedBar(props)} }`};
  ${props => props.pathname.match(/orders$/) && selectedBar(props)};

  @media (max-width: 600px){
  /* mobile screen */
    width: 100%;
    a {
      color: ${props => props.theme.font.color.primary};
    }
    background-color: ${props => props.theme.colors.background} !important;
  }
`;

export const NavBarProfile = styled(NavBarSegments)`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.font.color.secundary};
  gap: 5px;
  width: 8%;
  min-width: 75px;
  flex-wrap: wrap;
  div {
    gap:3px;
    height: 70px;
    width: 70px;
    padding: 15px;
    background-color: ${props => props.theme.colors.secundary};
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid;
    border-radius: 100%;
    h4 {
      font-weight: bold;
      font-size: 0.55em;
      margin: 0;
      text-align: center;
    }
  }

  @media (max-width: 600px){
  /* mobile screen */
  display: none !important;
    width: 100%;
    background-color: #EA0404 !important
  }
`;

export const NavBarCheckout = styled(NavBarSegments)`
  background-color: ${props => props.theme.colors.secundary};
  flex-direction: column;
  width: 5%;
  label {
    margin: 0;
    color: ${props => props.theme.font.color.secundary};
    cursor: pointer;
  }
  button {
    border: none;
    color: ${props => props.theme.font.color.secundary};
    background-color:${props => props.theme.colors.secundary};
    :hover {
      @keyframes shake {
        10%, 90% {
          transform: translate3d(-1px, 0, 0);
        }
        
        20%, 80% {
          transform: translate3d(2px, 0, 0);
        }

        30%, 50%, 70% {
          transform: translate3d(-4px, 0, 0);
        }

        40%, 60% {
          transform: translate3d(4px, 0, 0);
        }
      }
      cursor: pointer;
      animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
      transform: translate3d(0, 0, 0);
      transition-duration: 500ms;
    }
  }

  @media (max-width: 600px){
  /* mobile screen */
    width: 100%;
    background-color: ${props => props.theme.colors.background} !important;
    border-radius: 0px 0px 10px 10px;
  }
`;

export const ChangeTheme = styled(NavBarSegments)`
  background-color: ${
    props => (
      props.pathname.includes('customer')
      ? props.theme.colors.secundary
      : props.theme.colors.primary
      )
    };
  flex-direction: column;
  gap: 5px;
  width: 10%;
  switch {
    cursor: pointer;
  }
  label {
    font-weight: bold;
    margin: 0;
    color: ${props => props.theme.font.color.secundary};
    cursor: pointer;
  }
`;