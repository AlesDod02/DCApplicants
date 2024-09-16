import { useNavigate } from 'react-router-dom';
import './App.css';

const App: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate('/HomeCandidato')}>Candidato</button>
      <button onClick={() => navigate('/HomeHr')}>HR</button>
    </div>
  );
};

export default App;

