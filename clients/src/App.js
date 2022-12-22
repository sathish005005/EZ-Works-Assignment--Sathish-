import { useState } from 'react';
import './App.css';
import Clients from './components/clients/Clients';
import Main from './components/Main';
import Nav from './components/nav/Nav';
import { data } from './data';

function App() {
  const [client,setClient]=useState(data[0]);
  return (
    <div className="app">
      <Nav/>
      <Clients setClient={setClient}/>
      <Main client={client}/>
    </div>
  );
}

export default App;
// ========================@sathish=========================