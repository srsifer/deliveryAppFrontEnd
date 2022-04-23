import styled from 'styled-components';

export const DivCard = styled.div`
  border: 1px solid black;
  box-shadow: 5px 5px 5px #B2B8BC;
  width: 300px;
  height: 400px;
  display:flex;
  margin: 15px;
  border-radius: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
    img{
      width: 200px;
      height: 200px;
    }
    p {
      text-align: center;
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
  background-color: #eaf1ef;
  width: 100%;
  height: 98%;
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  align-items: center;
  `;

export const DivCardButons = styled.div`
  input {
    width: 50px;
    height: 25px;
    background-color: #f2f2f2;
    padding: 4px;
    border: 1px solid #000000;
    color: #333;
    border-radius: 2px;
    margin: 1px;
  }
`;

export const ButtonAdd = styled.button`
    border: none;
    padding: 10px;
    text-decoration: none;
    color: white;
    cursor: pointer;
    transition: background .3s;
    background-color: #F61B1B;
    border-radius: 0px 10px 10px 0px ;
`;

export const ButtonRemove = styled(ButtonAdd)`
    border-radius: 10px 0px 0px 10px ;
`;