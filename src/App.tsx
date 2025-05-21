import React from 'react';
import Layout from './components/Layout';
import { CardContextProvider } from './context/CardContext';

function App() {
  return (
    <CardContextProvider>
      <Layout />
    </CardContextProvider>
  );
}

export default App;