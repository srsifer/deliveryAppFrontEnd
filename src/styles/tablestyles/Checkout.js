import styled from 'styled-components';

export const DivBodyCheckout = styled.div`
background-color: ${props => props.theme.colors.background};
`;

export const MainChekoutDiv = styled.div`
display: flex;
flex-direction: column;
margin-left: auto;
margin-right: auto;
width:80%;
height:800px;
justify-content: space-around;
align-items: stretch;
`;

export const TotalDiv = styled.div`
  background-color: ${props => props.theme.colors.primary}; /* Green */
  border-radius:15px;
  color: ${props => props.theme.font.color.secundary};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 45px;
  width: max-content;
  padding: 10px;
  height: 60px;
  margin:10px;
  margin-left: auto !important;
`;

export const AddressDiv = styled.div`
box-shadow: 0 0 2em ${props => props.theme.colors.shadows};
border-radius: 10px;
padding:10px;
color: ${props => props.theme.font.color.primary};
background-color: ${props => props.theme.colors.secundary}

  p {
    font-size: 20px;
    font-weight: 800;
    
  }

  select {
   height: 46px;
   font-size: larger;
   font-weight: bold;
   text-align: center;
   border-radius: 5px;
   background-color: ${props => props.theme.colors.secundary};
   color: ${props => props.theme.font.color.secundary};
      :hover {
        transform: scale(1.0)
      }
  }

  input {
    height: 40px;
    width: 500px;
    border-radius: 10px;
    margin: 10px;
    background-color: #F5DEB3;
    font-weight: bold;
    font-size: large;
    text-align: center;
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  button {
    background-color: ${props => props.theme.colors.secundary};
    color: ${props => props.theme.font.color.secundary};
    border: none;
    height: 46px;
    font-size: larger;
    font-weight: bold;
    text-align: center;
    border-radius: 10px;
    height:50px;
    width: 200px;
    :disabled {
        :hover {
            transform: scale(1.0);
        }
        background-color: #B0C4DE;
        color:white;
    }
    :hover {
      transform: scale(1.1);
      transition-duration: 500ms;
      box-shadow: 5px 5px 5px ${props => props.theme.colors.primary};
      cursor: pointer;
    }
  }
`;


