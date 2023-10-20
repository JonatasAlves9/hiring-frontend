import React from 'react';
import { createContext, JSX, useCallback, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Stocks } from '../../domain/usecases/stocks/stocks.ts';
import { GetStockByNameResponse } from '../../domain/models';
import { GetStockHistoryResponse } from '../../domain/models/get-stock-history-response.ts';
import { GetStockGainsResponse } from '../../domain/models/get-stock-gains-response.ts';
import { CompareStockResponse } from '../../domain/models/compare-stock-response.ts';
import {
  STATUS_REQUEST,
  StatusRequest,
} from '../../domain/models/status-request.ts';
import { toastError } from '../components/toast';

interface IProps {
  children: JSX.Element;
  stock: Stocks;
}

interface StockContextType {
  stockDetail: GetStockByNameResponse | undefined;
  stockHistory: GetStockHistoryResponse | undefined;
  gainsOfStock: GetStockGainsResponse | undefined;
  stocksCompared: CompareStockResponse | undefined;
  stocksToCompare: string[] | undefined;
  getDetailAboutStock: (stock_name: string) => void;
  getHistoryOfStock: (from: Date, to: Date) => void;
  getGainsOfStock: (purchasedAt: Date, purchasedAmount: string) => void;
  compareStock: (new_stock_to_compare: string) => void;
  resetCompare: () => void;
  resetStock: () => void;
  loadingStockDetail: StatusRequest;
  loadingStockHistory: StatusRequest;
  loadingStockGains: StatusRequest;
  loadingCompareStock: StatusRequest;
}

export const StockContext = createContext<StockContextType>({
  stockDetail: undefined,
  stockHistory: undefined,
  gainsOfStock: undefined,
  stocksCompared: undefined,
  stocksToCompare: [],
  loadingStockDetail: STATUS_REQUEST.NONE,
  loadingStockHistory: STATUS_REQUEST.NONE,
  loadingStockGains: STATUS_REQUEST.NONE,
  loadingCompareStock: STATUS_REQUEST.NONE,
  getDetailAboutStock: () => null,
  getHistoryOfStock: () => null,
  getGainsOfStock: () => null,
  compareStock: () => null,
  resetCompare: () => null,
  resetStock: () => null,
});

export const useStock = () => {
  return useContext(StockContext);
};

const StockProvider = ({ children, stock }: IProps) => {
  const [stockDetail, setStockDetail] = useState<
    GetStockByNameResponse | undefined
  >();
  const [stockHistory, setStockHistory] = useState<
    GetStockHistoryResponse | undefined
  >();
  const [gainsOfStock, setGainsOfStock] = useState<
    GetStockGainsResponse | undefined
  >();
  const [stocksCompared, setStockedCompared] = useState<
    CompareStockResponse | undefined
  >();

  const [stocksToCompare, setStockToCompare] = useState<string[]>([]);

  const [loadingStockDetail, setLoadingStockDetail] = useState<StatusRequest>(
    STATUS_REQUEST.LOADING,
  );
  const [loadingStockHistory, setLoadingStockHistory] = useState<StatusRequest>(
    STATUS_REQUEST.NONE,
  );
  const [loadingStockGains, setLoadingStockGains] = useState<StatusRequest>(
    STATUS_REQUEST.NONE,
  );
  const [loadingCompareStock, setLoadingCompareStock] = useState<StatusRequest>(
    STATUS_REQUEST.NONE,
  );

  const navigate = useNavigate();

  const getDetailAboutStock = useCallback((stock_name: string) => {
    setLoadingStockDetail(STATUS_REQUEST.LOADING);
    stock
      .getStockByName({
        stock_name,
      })
      .then((res) => {
        setStockDetail(res);
        setLoadingStockDetail(STATUS_REQUEST.DONE);
      })
      .catch((err) => {
        toastError(err.message);
        navigate('/');
      });
  }, []);

  const getHistoryOfStock = useCallback(
    (from: Date, to: Date) => {
      setLoadingStockHistory(STATUS_REQUEST.LOADING);

      if (stockDetail === undefined) {
        return;
      }

      stock
        .getStockHistory({
          stock_name: stockDetail.name,
          from,
          to,
        })
        .then((res) => {
          setStockHistory(res);
          setLoadingStockHistory(STATUS_REQUEST.DONE);
        })
        .catch((err) => {
          setLoadingStockHistory(STATUS_REQUEST.ERROR);
          toastError(err.message);
        });
    },
    [stockDetail],
  );

  const getGainsOfStock = useCallback(
    (purchasedAt: Date, purchasedAmount: string) => {
      setLoadingStockGains(STATUS_REQUEST.LOADING);

      if (stockDetail === undefined) {
        return;
      }

      stock
        .getStockGains({
          stock_name: stockDetail.name,
          purchasedAt,
          purchasedAmount,
        })
        .then((res) => {
          setGainsOfStock(res);
          setLoadingStockGains(STATUS_REQUEST.DONE);
        })
        .catch((err) => {
          toastError(err.message);
          setLoadingStockGains(STATUS_REQUEST.ERROR);
        });
    },
    [stockDetail],
  );

  const resetCompare = useCallback(() => {
    setStockToCompare([]);
    setStockedCompared(undefined);
  }, [setStockToCompare, setStockedCompared]);

  const resetStock = useCallback(() => {
    setStockDetail(undefined);
    setGainsOfStock(undefined);
    setStockedCompared(undefined);
    setGainsOfStock(undefined);
  }, [setStockDetail, setGainsOfStock, setStockedCompared, setGainsOfStock]);

  const compareStock = useCallback(
    (new_stock_to_compare: string) => {
      if (stockDetail === undefined || new_stock_to_compare === '') {
        return;
      }
      setLoadingCompareStock(STATUS_REQUEST.LOADING);
      stock
        .compareStocks({
          stock_name: stockDetail.name,
          stocksToCompare: [...stocksToCompare, new_stock_to_compare],
        })
        .then((res) => {
          if (stocksToCompare.length + 2 > res.lastPrices.length) {
            toastError('Ação não encontrada!');
            setLoadingCompareStock(STATUS_REQUEST.ERROR);
            return;
          }
          setStockedCompared(res);
          setStockToCompare((oldValue) => [...oldValue, new_stock_to_compare]);
          setLoadingCompareStock(STATUS_REQUEST.DONE);
        })
        .catch((err) => {
          toastError(err.message);
          setLoadingCompareStock(STATUS_REQUEST.ERROR);
        });
    },
    [stockDetail, stocksToCompare],
  );

  return (
    <StockContext.Provider
      value={{
        stockDetail,
        stockHistory,
        stocksToCompare,
        stocksCompared,
        gainsOfStock,
        getDetailAboutStock,
        getGainsOfStock,
        compareStock,
        getHistoryOfStock,
        resetCompare,
        loadingStockDetail,
        loadingStockHistory,
        loadingStockGains,
        loadingCompareStock,
        resetStock,
      }}
    >
      {children}
    </StockContext.Provider>
  );
};

export default StockProvider;
