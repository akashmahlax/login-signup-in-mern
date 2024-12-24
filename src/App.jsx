
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProductPage from './components/ProductPage';
import CheckoutPage from './components/CheckoutPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SignupPage />} /> 
      <Route path="/home" element={<HomePage />} /> 
      <Route path="/products" element={<ProductPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/login" element={<LoginPage />} />

    </Routes>
  );
}

export default App;
