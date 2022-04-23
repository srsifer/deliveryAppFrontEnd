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
  background-color: #FF7F50; /* Green */
  border-radius:15px;
  color: white;
  display: flex;
  justify-content: space-between;
  font-size: 45px;
  padding: 8px; 
  width: 40%;
  height: 60px;
  margin:10px;
  margin-left: auto !important;
`;

export const AddressDiv = styled.div`
border: 1px solid green;
border-radius:15px;
padding:10px;

  select {
    background-color: #FF7F50;
    border: none;
    font-weight: bold;
    border-radius: 10px;
    height:50px;
    width: 200px;
    text-align: center;
  }
  input {
    height: 40px;
    width: 500px;
    border-radius: 10px;
    margin: 10px;
  }

  button {
    background-color: #FF7F50;
    border: none;
    font-weight: bold;
    border-radius: 10px;
    height:50px;
    width: 200px;
    text-align: center;
  }
`;


