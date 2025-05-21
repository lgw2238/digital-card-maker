import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './components/LandingPage';
import { CardContextProvider } from './context/CardContext';

function App() {
  return (
    <CardContextProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/maker" element={<Layout />} />
        </Routes>
      </HashRouter>
    </CardContextProvider>
  );
}

export default App;