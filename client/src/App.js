import './App.css';
import { Route, Switch } from 'react-router-dom';
import { RegisterPage } from './pages/RegisterPage';
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';
import { useContext, useEffect } from 'react';
import { GlobalContext } from './context/global/GlobalContext';
import { CheckOutPage } from './pages/CheckOutPage';
import { HomePage } from './pages/HomePage';
function App() {
  const { setUser, reloadCartItems } = useContext(GlobalContext);

  // get user info from localStorage
  useEffect(() => {
    const loggedInUserInfo = localStorage.getItem('user');
    if (loggedInUserInfo) {
      const userInfo = JSON.parse(loggedInUserInfo);
      setUser(userInfo);
    }
    const shoppingCartItems = localStorage.getItem('shoppingCartItems');
    if (shoppingCartItems) {
      const shoppingCartItemsArray = JSON.parse(shoppingCartItems);
      reloadCartItems(shoppingCartItemsArray);
    }
  }, []);
  return (
    <>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/register' component={RegisterPage} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/dashboard' component={DashboardPage} />
        <Route exact path='/shop' component={DashboardPage} />
        <Route exact path='/cart' component={CheckOutPage} />
      </Switch>
    </>
  );
}

export default App;
