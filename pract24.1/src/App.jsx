import { Routes, Route } from 'react-router'; 
import Home from './pages/Home';
import Menu from './pages/Menu';
import Order from './pages/Order'; 
import Navigation from './components/Navigation';

function App() {
  return (
    <div>
      <h1>Пицца-Экспресс</h1>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order" element={<Order />} />
      </Routes> 
    </div>
  );
}
export default App; 

