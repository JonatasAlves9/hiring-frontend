import React from 'react';
import { ContentFlex, Wrapper } from './styles.ts';
import { IconBack } from '../../components/iconBack';
import { CardDetailStock } from './components/cardDetailStock';
import { CardSimulateStock } from './components/cardSimulateStock';
import { useStock } from '../../hooks/useStocks.tsx';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { STATUS_REQUEST } from '../../../domain/models/status-request.ts';
import { LoadingScreen } from '../../components/loadingScreen';

export const Dashboard = () => {
  const { getDetailAboutStock, loadingStockDetail, resetStock } = useStock();
  const { name_stock } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getDetailAboutStock(name_stock || '');
  }, []);

  return loadingStockDetail === STATUS_REQUEST.LOADING ? (
    <LoadingScreen />
  ) : (
    <Wrapper>
      <IconBack
        onPress={() => {
          navigate('/');
          resetStock();
        }}
      />
      <ContentFlex>
        <CardDetailStock />
        <CardSimulateStock />
      </ContentFlex>
    </Wrapper>
  );
};
