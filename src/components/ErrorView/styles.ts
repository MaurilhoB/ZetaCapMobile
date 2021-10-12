import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.surface};
`;

export const Title = styled.Text`
  font-size: 24px;
  font-family: 'Nunito-Bold';
  color: ${props => props.theme.colors.text_primary};
`;

export const Message = styled.Text`
  font-size: 16px;
  font-family: 'Nunito-Regular';
  color: ${props => props.theme.colors.text_secondary};
`;
