import styled from 'styled-components';

export const DetailsOrderDiv = styled.div`
  width: 60%; 
  height: min-content;
  margin: 4em auto 4em auto;
  background-color: ${props => props.theme.colors.background};
  display: flex;
  flex-direction: column;
  padding-left: 1em;
  padding-right: 1em;
  color: ${props => props.theme.font.color.primary};
  gap: 20px;
  h2 {
    margin: 0;
  }
  p {
      font-weight: bold;
      font-size: 18px;
  }
`;

export const InfoOrderDeshboard = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  justify-content: space-around;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 4em;
  color: ${props => props.theme.font.color.secundary};
`;

export const MarkSenddButton = styled.button`
  border-style: none;
  color: ${props => props.theme.font.color.secundary};
  background-color: ${props => props.theme.colors.secundary};
  border-radius: 1em;
  height: 3em;
  width: 8em;
  padding: 2px;
  font-weight:bold;
  font-size: 16px;

  :hover {
      transform: scale(1.1);
  }

  :disabled {
    :hover {
      transform: scale(1.0);
    }
    background-color: #B0C4DE;
    color:white;
  }
`;

export const PrepareOrderButton = styled(MarkSenddButton)`
`;
