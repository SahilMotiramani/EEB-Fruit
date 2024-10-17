import './App.css';
import Pages from './components/pages/Pages';
import { CartProvider } from './context/CartContext'; // Ensure this path is correct
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Pages />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
