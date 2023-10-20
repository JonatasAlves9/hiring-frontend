import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageWrapper } from '../../presentation/layout/pageWrapper';
import MakeDashboard from '../factories/modules/dashboard-factory.tsx';
import { HomeSearch } from '../../presentation/modules/home-search';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<PageWrapper />}>
        <Route path="/" element={<HomeSearch />} />
        <Route path="/stocks/:name_stock" element={<MakeDashboard />} />
      </Route>
    </Routes>
  );
};
