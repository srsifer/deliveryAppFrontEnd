import styled from 'styled-components';

export const DivBodyCheckout = styled.div`
  background-color: ${props => props.theme.colors.background};
`;

export const MainChekoutDiv = styled.fieldset`
  box-shadow: 0 10px 2em 4px ${props => props.theme.colors.shadows};
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  margin: 4em auto 4em auto;
  width: 80%;
  height: auto;
  justify-content: space-around;
  align-items: stretch;
  padding: 50px;
  gap: 30px;
  legend {
    border-radius: 100px;
    background-color: ${props => props.theme.colors.background}; 
    font-size: 40px;
    font-weight: 800;
    padding: 0;
  }
`;

export const TotalDiv = styled.div`
  background-color: ${props => props.theme.colors.primary}; /* Green */
  border-radius:15px;
  border: 1px solid;
  color: ${props => props.theme.font.color.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  width: max-content;
  padding: 10px;
  height: 60px;
  margin:0;
  margin-left: auto !important;
`;

export const AddressDiv = styled.section`
  flex-wrap: wrap;
  box-shadow: 0 0 2em ${props => props.theme.colors.shadows};
  border-radius: 10px;
  padding:10px;
  color: ${props => props.theme.font.color.primary};
  background-color: ${props => props.theme.colors.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  p {
    font-size: 20px;
    font-weight: 800;
  }

  div {
    flex-wrap: wrap;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    div {
      margin-bottom: 25px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    p {
    font-size: 15px;
    margin: 0;
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
      margin: 0;
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
        background-color: #B0C4DE;
        color:white;
        :hover {
          transform: scale(1.0);
          box-shadow: none;
          cursor: default;
        }
      }
      :hover {
        transform: scale(1.1);
        transition-duration: 500ms;
        box-shadow: 5px 5px 5px ${props => props.theme.colors.primary};
        cursor: pointer;
      }
    }
  }
`;
