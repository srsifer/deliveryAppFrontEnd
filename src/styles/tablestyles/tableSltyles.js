import styled from 'styled-components';

export const TableDiv = styled.table`
  height: auto;
  box-shadow: 0 0 1em ${props => props.theme.colors.shadows};
  border-radius: 10px;
  padding: 10px;
    tr {
      text-align: center;
      height: 50px;
      border-style: none;
      font-size: 25px;
    }

    th {
      color: ${props => props.theme.font.color.primary};
    }
`;

export const TdIten = styled.td`
  background-color:${props => props.theme.colors.secundary};
  border-radius: 5px 0px 0px 5px;
  color:white;
  width: 5%;
`;

export const TdDescription = styled(TdIten)`
  width: 25%;
`;

export const TdQuantity = styled(TdIten)`
  width: 10%;
`;

export const TdUnitPrice = styled(TdIten)`
  width:10%;
`;

export const TdTotalPrice = styled(TdIten)`
  width:10%;
`;

export const TdRemoveItem = styled(TdIten)`
  background-color:red;
  color: ${props => props.theme.font.color.secundary};
  border-radius: 0px 5px 5px 0px;
`;

export const ButtonTableRemoveItem = styled.button`
  background-color: red;
  color: ${props => props.theme.font.color.secundary};
  width: 100%;
  height: 100%;
  border-style: none;
  font-size: x-large;
  :hover {
      transform: scale(1.1);
      transition-duration: 500ms;
      box-shadow: 5px 5px 5px red;
      cursor: pointer;
    }
`;