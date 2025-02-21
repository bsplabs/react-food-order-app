import { createContext, useState } from 'react';

const UserProgressContext = createContext({
  progress: '',
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
});

export function UserProgressContextProvider({ children }) {
  console.log('UserProgressContextProvider...render');
  const [userProgress, setUserProgress] = useState();

  function showCart() {
    console.log('showCart');
    setUserProgress('cart');
  }

  function hideCart() {
    console.log('hideCart');
    setUserProgress('');
  }

  function showCheckout() {
    console.log('showCheckout');
    setUserProgress('checkout');
  }

  function hideCheckout() {
    console.log('hideCheckout');
    setUserProgress('');
  }

  const userProgressCtx = {
    progress: userProgress,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout,
  };

  return (
    <UserProgressContext.Provider value={userProgressCtx}>
      {children}
    </UserProgressContext.Provider>
  );
}

export default UserProgressContext;
