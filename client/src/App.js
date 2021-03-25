import './App.css';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Launches from './components/Launches';
import Launch from './components/Launch';
import RefPrac from './components/RefPrac';
import PracRefHook from './components/PracRefHook';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <RefPrac />
      <PracRefHook />
    </div>
    // <ApolloProvider client={client}>
    //   <Router>
    //     <div className='container'>
    //       <h3 className='text-center'>SPACE X</h3>
    //       <h1>HELLO</h1>
    //       <RefPrac />
    //       {/* <Route exact path='/' component={Launches} />
    //       <Route exact path='/launch/:flight_number' component={Launch} /> */}
    //     </div>
    //   </Router>
    // </ApolloProvider>
  );
}

export default App;
