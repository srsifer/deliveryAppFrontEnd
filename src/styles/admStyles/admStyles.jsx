import styled from 'styled-components';


export const MainDashboarDiv = styled.div`
  align-content: center;
  align-items: center;
  margin-top: 10%;
  display: flex;
  flex-direction: row-reverse;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  justify-content: space-evenly;
`;

export const DashboardAdm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  height: max-content;
  box-shadow: 0 0 1em ${props => props.theme.colors.shadows};
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 10px;

  select {
    border-radius: 5px;
    background-color: ${props => props.theme.colors.secundary};
    color: ${props => props.theme.font.color.secundary};
    height: 46px;
    font-size: larger;
    font-weight: bold;
    margin: 10px;
    text-align: center;
    width: 90%;
    :disabled {
      background-color: #B0C4DE;
      color:white;
      :hover {
          transform: scale(1.0);
      }
    }
    :hover {
        transform: scale(1.0)
    }
  }

  input {
    height: 40px;
    width: 90%;
    border-radius: 10px;
    margin: 10px;
    background-color: #F5DEB3;
    font-weight: bold;
    font-size: large;
    text-align: center;
  }

  button {
    margin: 10px;
    background-color: ${props => props.theme.colors.secundary};
    color: ${props => props.theme.font.color.secundary};
    border: none;
    height: 46px;
    font-size: larger;
    font-weight: bold;
    text-align: center;
    border-radius: 10px;
    height:50px;
    width: 90%;
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
`;

export const TableDivAdm = styled.table`
  height:200px;
  width: 65%;
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