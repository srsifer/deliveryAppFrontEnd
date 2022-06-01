import styled from 'styled-components';

export const DivCard = styled.div`
  box-shadow: 5px 5px 5px ${props => props.theme.colors.shadows};
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
      color: ${props => props.theme.font.color.primary};
      margin: 10px;
    }
    h3 {
      text-align: center;
      color: ${props => props.theme.font.color.otherColor};
      margin: 10px;
    }

    :hover {
      transform: scale(1.1);
      transition-duration: 500ms;
      box-shadow: 15px 15px 15px ${props => props.theme.colors.shadows};
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
    text-align: center;
    font-weight: bolder;
    font-size: large;
    width: 50px;
    height: 31px;
    padding: 5px;
    border: none;
    color: ${props => props.theme.font.color.otherColor};
    border-radius: 2px;
    margin: 1px;
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;

export const ButtonAdd = styled.button`
    border: none;
    padding: 10px;
    text-decoration: none;
    color: ${props => props.theme.font.color.secundary};
    cursor: pointer;
    transition: background .3s;
    background-color: ${props => props.theme.colors.secundary};
    border-radius: 0px 10px 10px 0px ;
    font-weight: bold;
    font-size: large;
`;

export const ButtonRemove = styled(ButtonAdd)`
    border-radius: 10px 0px 0px 10px;
`;