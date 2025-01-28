import { useContext } from 'react';

import Button from './UI/Button.jsx';
import CartContext from '../store/CartContext.jsx';

import logoImg from '../assets/logo.jpg';

export default function Header() {
  const cartCtx = useContext(CartContext);

  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalCartItems + item.quantity + 1;
  }, 0);

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A restaurant" />
        <h1>React Food</h1>
      </div>
      <nav>
        <Button textOnly={true}>Cart (0)</Button>
      </nav>
    </header>
  );
}
