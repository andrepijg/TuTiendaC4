import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import NavBarTienda from './components/Navbar/NavBarTienda';
import AppRouter from './router/AppRouter.jsx';

function App() {
  return (
    <BrowserRouter>
      <NavBarTienda />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
