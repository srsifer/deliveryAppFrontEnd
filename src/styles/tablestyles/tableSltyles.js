import styled from 'styled-components';

export const TableDiv = styled.table`
height:200px;
box-shadow: 0 0 1em #00000099;
border-radius: 10px;
padding: 10px;
  tr {
    text-align: center;
    height: 50px;
    border-style: none;
    font-size: 25px;
  }
`;

export const TdIten = styled.td`
  background-color:#DFFF00;
  border-radius: 5px 0px 0px 5px;
  color:white;
  width: 5%;
`;

export const TdDescription = styled(TdIten)`
  background-color:#FFBF00;
  width: 40%;
`;

export const TdQuantity = styled(TdIten)`
  background-color:#FF7F50;
  color: white;
  width: 10%;
`;

export const TdUnitPrice = styled(TdIten)`
  background-color: #DE3163;
  color: white;
`;

export const TdTotalPrice = styled(TdIten)`
  background-color:#E9967A;
  color: white;
`;

export const TdRemoveItem = styled(TdIten)`
  background-color:red;
  color: white;
  border-radius: 0px 5px 5px 0px;
`;