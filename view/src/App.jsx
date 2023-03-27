import './App.css';
import Header from './header/Header';
// import Home from "./pages/Home";
import { useLocation } from 'react-router-dom';
import Routes from './routes/index';
function App() {
  return (
    <div className="app">
      {useLocation().pathname === '/signin' ? '' : <Header />}
      <Routes />
    </div>
  );
}

export default App;
