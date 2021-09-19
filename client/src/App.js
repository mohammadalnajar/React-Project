import './App.css';
import { Route, Switch } from 'react-router-dom';
import { RegisterPage } from './pages/RegisterPage';
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';
import { useContext, useEffect } from 'react';
import { GlobalContext } from './context/global/GlobalContext';
import { CheckOutPage } from './pages/CheckOutPage';
function App() {
  const { setUser } = useContext(GlobalContext);

  // get user info from localStorage
  useEffect(() => {
    const loggedInUserInfo = localStorage.getItem('user');
    if (loggedInUserInfo) {
      const userInfo = JSON.parse(loggedInUserInfo);
      setUser(userInfo);
    }
  }, []);
  return (
    <>
      <Switch>
        <Route exact path='/' component={RegisterPage} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/dashboard' component={DashboardPage} />
        <Route exact path='/shop' component={DashboardPage} />
        <Route exact path='/cart' component={CheckOutPage} />
      </Switch>
    </>
  );
}

export default App;
