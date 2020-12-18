import './App.css';
import Routes from './routes/Routes';
import Menus from './component/Menus/Menu';
import { BrowserRouter as Router } from "react-router-dom";
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Menus />
        <Routes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
