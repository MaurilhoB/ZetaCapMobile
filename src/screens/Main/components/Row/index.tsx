import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { formatCurrency } from '../../../../utils';

interface ICryptosList {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  market_cap_change_percentage_24h: number;
  image: string;
}

interface IRowProps {
  crypto: ICryptosList;
  currency: string;
}

type NavigationProp = {
  navigate(to: string, p?: any): void;
};

import {
  Container,
  LeftContainer,
  CryptoIcon,
  Metadata,
  Name,
  Symbol,
  RightContainer,
  Price,
  Status,
} from './styles';

const Row: React.FC<IRowProps> = ({ crypto, currency }) => {
  const navigation = useNavigation() as NavigationProp;

  const navigateHandle = useCallback(() => {
    navigation.navigate('Market', { cryptoId: crypto.id });
  }, []);

  return (
    <Container onPress={navigateHandle}>
      <LeftContainer>
        <CryptoIcon source={{ uri: crypto.image }} />
        <Metadata>
          <Name>{crypto.name}</Name>
          <Symbol>{crypto.symbol}</Symbol>
        </Metadata>
      </LeftContainer>
      <RightContainer>
        <Price>{formatCurrency(currency)(crypto.current_price)}</Price>
        <Status
          color={
            crypto.market_cap_change_percentage_24h < 0 ? '#e63946' : '#52b788'
          }>
          {typeof crypto.market_cap_change_percentage_24h === 'number'
            ? crypto.market_cap_change_percentage_24h.toFixed(3) + '%'
            : null}
        </Status>
      </RightContainer>
    </Container>
  );
};

export default React.memo(Row);
