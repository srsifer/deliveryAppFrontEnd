import styled from 'styled-components';

export const DivAllOrders = styled.div`
    background-color: ${props => props.theme.colors.background};
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 4em;
    height: min-content;
    display:flex;
    flex-wrap: wrap;
    justify-items: center;
    justify-content: space-around;
    justify-items: center;
    text-decoration: none;
    a {
      color: ${props => props.theme.font.color.otherColor};
      text-decoration: none;
    }
`;

export const OrderDiv = styled.div`
    background-color: ${props => props.theme.font.color.secundary};
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    width: 30em;
    height: max-content;
    margin: 1em;
    border-radius: 1em;
    :hover{
        transform: scale(1.1);
        box-shadow: 15px 15px 15px ${props => props.theme.colors.shadows};
    }
    box-shadow: 5px 5px 5px ${props => props.theme.colors.shadows};
`;

export const IdDivOrder = styled.div`
    width: 10%;
    height: 80px;
    border-radius: 10px;
    display:flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 40px;
    color: ${props => props.theme.font.color.otherColor};
`;

export const StatusOrderStyles = styled(IdDivOrder)`
    width: 40%;
    border-radius: 15px;
    font-size: xx-large;
    background-color: ${(props) => ` ${props.status}`};
    
`;

export const OrderDateAndPrice = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    font-weight: bold;
`;
export const DivAdressCardOrder = styled.div`
    width: 100%;
    height: min-content;
    background-color: ${props => props.theme.colors.secundary};
    text-align: center;
    font-size: larger;
    font-weight: bold;
    border-radius: 10px;
    color: ${props => props.theme.font.color.secundary}
`