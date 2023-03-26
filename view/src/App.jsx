import "./App.css";
import Header from "./header/Header";
// import Home from "./pages/Home";
import Routes from "./routes/index";
function App() {
  return (
    <div className="app">
      <Header />
      <Routes />
    </div>
  );
}

export default App;
