import './App.css';
import { Route, Switch } from 'react-router-dom';
import { RegisterPage } from './pages/RegisterPage';
import { LoginPage } from './pages/LoginPage';
import { useContext, useEffect } from 'react';
import { GlobalContext } from './context/global/GlobalContext';
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
      </Switch>
    </>
  );
}

export default App;
