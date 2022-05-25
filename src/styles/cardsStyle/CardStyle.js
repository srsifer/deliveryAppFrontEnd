import styled from 'styled-components';

export const DivCard = styled.div`
  box-shadow: 5px 5px 5px #B2B8BC;
  width: 300px;
  height: 400px;
  margin: 15px;
  border-radius: 10px;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.cardScheme.cardBg};
    img{
      width: 200px;
      height: 200px;
    }
    p {
      text-align: center;
      color: ${props => props.theme.cardScheme.cardFontColor};
      margin: 10px;
    }
  @media (max-width: 600px){
  /* mobile screen */
  width: 150px;
  height: 200px;
  img{
      width: 60px;
      height: 60px;
    }
  }
`;

export const Price = styled.div`
  display:flex;
  flex-direction: row;
`;

export const DivCardFooter = styled.div`
  background-color: ${props => props.theme.cardScheme.cardFooterBg};
  width: 100%;
  height: 98%;
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  `;

export const DivCardButons = styled.div`
  input {
    width: 50px;
    height: 25px;
    background-color: #f2f2f2;
    padding: 4px;
    border: none;
    color: ${props => props.theme.cardScheme.cardFontColor};
    border-radius: 2px;
    margin: 1px;
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
`;

export const ButtonAdd = styled.button`
    border: none;
    padding: 10px;
    text-decoration: none;
    color: white;
    cursor: pointer;
    transition: background .3s;
    background-color: ${props => props.theme.cardScheme.cardButtonColor};
    border-radius: 0px 10px 10px 0px ;
    font-weight: bold;
    font-size: large;
`;

export const ButtonRemove = styled(ButtonAdd)`
    border-radius: 10px 0px 0px 10px;
`;