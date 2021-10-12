import React from 'react';
import { View } from 'react-native';

interface IMarketProps {
  route: {
    params: {
      cryptoId: string;
    };
  };
}
const Market: React.FC<IMarketProps> = ({ route }) => {
  console.clear();
  console.log(route);
  return <View />;
};

export default Market;
