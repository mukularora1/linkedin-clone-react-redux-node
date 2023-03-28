import { useLocation } from 'react-router-dom';
import './App.css';
import Header from './header/Header';
import Routes from './routes/index';

function App() {
  const location = useLocation();

  return (
    <div className="app">
      {location.pathname === '/signin' || location.pathname === '/signup' ? (
        ''
      ) : (
        <Header />
      )}
      <Routes />
    </div>
  );
}

export default App;
