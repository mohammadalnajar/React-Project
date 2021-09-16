import './App.css';
import { Route, Switch } from 'react-router-dom';
import { RegisterPage } from './pages/RegisterPage';
import { GlobalProvider } from './context/global/GlobalContext';
import { LoginPage } from './components/LoginPage';
function App() {
  return (
    <>
      <GlobalProvider>
        <Switch>
          <Route exact path='/' component={RegisterPage} />
          <Route exact path='/login' component={LoginPage} />
        </Switch>
      </GlobalProvider>
    </>
  );
}

export default App;
