import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import axios from 'axios';
import { FlatList as CryptoList } from 'react-native';

import ErrorView from '../../components/ErrorView';
import SearchBar from '../../components/SearchBar';

import usePreferences from '../../context/hooks/usePreferences';
import api from '../../services/api';

import Loader from './components/Loader';
import Row from './components/Row';

import { Container } from './styles';

interface ICryptosList {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  market_cap_change_percentage_24h: number;
  image: string;
}

const Main: React.FC = () => {
  const [cryptosList, setCryptosList] = useState<ICryptosList[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(false);
  const [focused, setFocused] = useState(false);
  const { currency } = usePreferences();

  useEffect(() => {
    setError(false);
    setCryptosList([]);

    const source = axios.CancelToken.source();

    const fetchData = async () => {
      try {
        const response = await api.get<ICryptosList[]>('coins/markets', {
          params: {
            vs_currency: currency,
            per_page: 150,
          },
          cancelToken: source.token,
        });
        const { data } = response;

        setCryptosList(data);
      } catch {
        setError(true);
      }
    };

    fetchData();
    return () => source.cancel();
  }, [currency]);

  const filteredCryptosList = useMemo(
    () =>
      cryptosList.filter(crypto => {
        if (searchTerm.length === 0) {
          return true;
        }
        if (
          crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          crypto.symbol.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return true;
        }
        return false;
      }),
    [cryptosList, searchTerm],
  );

  let timerID = useRef<any>();

  const searchHandle = useCallback(
    (value: string) => {
      if (error) return;

      if (timerID) {
        clearTimeout(timerID.current);
      }

      timerID.current = setTimeout(() => {
        setSearchTerm(value);
      }, 100);
    },
    [error],
  );

  const renderItem = useCallback(
    ({ item: crypto }) => <Row currency={currency} crypto={crypto} />,
    [currency],
  );

  const refreshHandle = useCallback(async () => {
    setError(false);
    setCryptosList([]);

    try {
      const source = axios.CancelToken.source();

      const response = await api.get<ICryptosList[]>('coins/markets', {
        params: {
          vs_currency: currency,
          per_page: 150,
        },
        cancelToken: source.token,
      });
      const { data } = response;

      setCryptosList(data);
    } catch {
      setError(true);
    }
  }, [currency]);

  return (
    <Container>
      <SearchBar
        focused={focused}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder="Bitcoin..."
        onChangeText={searchHandle}
      />
      <CryptoList
        data={filteredCryptosList}
        style={{
          marginVertical: 10,
        }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          borderRadius: 10,
          overflow: 'hidden',
          flexGrow: 1,
        }}
        ListEmptyComponent={
          error ? (
            <ErrorView
              title="Houve um erro!"
              message="Erro ao buscar os dados"
            />
          ) : (
            <Loader />
          )
        }
        refreshing={false}
        onRefresh={refreshHandle}
        keyExtractor={crypto => crypto.id}
        renderItem={renderItem}
      />
    </Container>
  );
};

export default Main;
