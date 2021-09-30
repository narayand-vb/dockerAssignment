
import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Details from './components/Details';
import { Route, Switch } from 'react-router';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/bots" component={Dashboard} />
        <Route exact path="/bots-details/:id" component={Details} />
      </Switch>
    </>
  );
}

export default App;
