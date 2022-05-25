import styled from 'styled-components';

export const DivBodyCheckout = styled.div`
background-color: #f7f7f7;
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
  color: white;
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

export const AddressDiv = styled.form`
border: 1px solid #001427;
border-radius: 10px;
padding:10px;
color: #001427;
background-color: #eff0f0;

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
   background-color: #001427;
   color: white;
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
    background-color: #001427;
    color: white;
    border: none;
    height: 46px;
    font-size: larger;
    font-weight: bold;
    text-align: center;
    border-radius: 10px;
    height:50px;
    width: 200px;
  }
`;


