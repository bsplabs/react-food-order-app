import Header from './components/Header';
import Meals from './components/Meals';
import Cart from './components/Cart.jsx';
import Checkout from './components/Checkout.jsx';

import { UserProgressContextProvider } from './store/UserProgressContext.jsx';
import { CartContextProvider } from './store/CartContext.jsx';

function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
        <Checkout />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
