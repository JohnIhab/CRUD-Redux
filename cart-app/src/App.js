import { Routes, Route } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import Products from './components/Products';
import Cart from './components/Cart';


function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
