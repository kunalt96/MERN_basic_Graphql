import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import GetUsers from './Components/GetUsers';
import AddUsers from './Components/AddUsers';
import Navbar from './Components/Navbar';
import DisplayUsers from './Components/DisplayUsers';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const errorLink = onError(({ grapqlErrors, networkError }) => {
  if (grapqlErrors) {
    grapqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error - ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: 'http://localhost:6969/graphql' }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/view-users/:id'>
            <DisplayUsers />
          </Route>
          <Route exact path='/view-users'>
            <GetUsers />
          </Route>
          <Route exact path='/register-users'>
            <AddUsers />
          </Route>
          <Route exact path='/'>
            <AddUsers />
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
