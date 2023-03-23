import { Fragment, useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

function App() {
  const [cartIsShown, serCartIsShown] = useState(false);
  const showCartHandler =() => {
      serCartIsShown(true)
  }
  const hideCartHandler =() => {
    serCartIsShown(false)
}
  return (
    <Fragment>
   {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;