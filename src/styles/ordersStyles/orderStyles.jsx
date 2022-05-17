import styled from 'styled-components';

export const DivAllOrders = styled.div`
    background-color:  #f8f8f8;
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
      color: black;
      text-decoration: none;
    }
`;

export const OrderDiv = styled.div`
    background-color: white;
    border: 1px solid black;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 30em;
    height: 120px;
    margin: 1em;
    border-radius: 1em;
    :hover{
        transform: scale(1.1);
    }
    box-shadow: 5px 5px 5px #B2B8BC;
`;

export const IdDivOrder = styled.div`
    background-color: #d1205b;
    width: 20%;
    height: 80px;
    border-radius: 10px;
    display:flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: xx-large;
    color: white;
`;

export const StatusOrder = styled(IdDivOrder)`
    width: 40%;
    border-radius: 15px;
    background-color: yellow;
    :hover{
        background-color: green;
    }
`;

export const OrderDateAndPrice = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    font-weight: bold;

`;