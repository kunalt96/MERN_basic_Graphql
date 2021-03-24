import './App.css';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Launches from './components/Launches';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className='container'>
        <h3 className='text-center'>SPACE X</h3>
        <h1>HELLO</h1>
        <Launches />
      </div>
    </ApolloProvider>
  );
}

export default App;
