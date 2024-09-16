import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import HomeCandidato from './pages/HomeCandidato';
import HomeHr from './pages/HomeHr';

const Index: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/HomeCandidato" element={<HomeCandidato />} />
        <Route path="/HomeHr" element={<HomeHr />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
