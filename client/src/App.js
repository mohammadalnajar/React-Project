import './App.css';
import { Route } from 'react-router-dom';
import { RegisterPage } from './pages/RegisterPage';

function App() {
  return (
    <>
      <Route exact path='/' component={RegisterPage} />
    </>
  );
}

export default App;
