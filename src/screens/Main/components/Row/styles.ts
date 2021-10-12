import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  background-color: ${props => props.theme.colors.surface};
  padding: 10px;
  margin: 0.3px;
`;

export const LeftContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const CryptoIcon = styled.Image`
  width: 52px;
  height: 52px;
  border-radius: 26px;
`;

export const Metadata = styled.View`
  margin-left: 10px;
`;

export const Name = styled.Text`
  font-size: 16px;
  font-family: 'Nunito-Bold';
  color: ${props => props.theme.colors.text_primary};
`;

export const Symbol = styled.Text`
  font-size: 14px;
  font-family: 'Nunito-SemiBold';
  color: ${props => props.theme.colors.text_secondary};
  text-transform: uppercase;
`;

export const RightContainer = styled.View`
  align-items: flex-end;
`;

export const Price = styled.Text`
  color: ${props => props.theme.colors.text_primary};
  font-family: 'Nunito-Bold';
  font-size: 14px;
`;

interface IStatusProps {
  color: string;
}

export const Status = styled.Text<IStatusProps>`
  font-family: 'Nunito-Bold';
  font-size: 12px;
  color: ${props => props.color};
`;
