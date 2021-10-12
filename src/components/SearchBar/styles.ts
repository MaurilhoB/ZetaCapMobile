import styled from 'styled-components/native';

interface IContainerProps {
  focused: boolean;
}

export const Container = styled.View<IContainerProps>`
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  margin-top: 10px;
  background-color: ${props => props.theme.colors.surface};
  border: 1px solid
    ${props => (props.focused ? props.theme.colors.primary : 'transparent')};
  padding-horizontal: 10px;
`;

export const Input = styled.TextInput`
  flex: 1;
  font-size: 16px;
  font-family: 'Nunito-Regular';
  background: transparent;
  color: ${props => props.theme.colors.text_primary};
  padding-vertical: 20px;
  padding-horizontal: 10px;
`;
