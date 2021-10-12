import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${props => props.theme.colors.surface};
  height: 100%;
`;

export const Row = styled.View`
  padding: 10px;
  margin-bottom: 1px;
`;
