import styled from 'styled-components';

const StyledList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 80%;
  align-items: baseline;
  justify-content: center;
  margin-top:50px;
  @media (max-width: 600px){
  /* mobile screen */
  width: 100%;
  margin-top:20px !important;
  }
`;

export default StyledList;
