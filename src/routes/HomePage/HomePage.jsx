import React from 'react';
import Header from '../../components/Header';
import ErrorBoundary from '../../components/commonComponent/ErrorBoundary/ErrorBoundary';
import HomeContent from '../../components/HomeContent';

const HomePage = () => (
  <ErrorBoundary>
    <Header />
    <HomeContent />
  </ErrorBoundary>
);

export default HomePage;
