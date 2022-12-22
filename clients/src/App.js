import { useEffect, useState } from 'react';
import './App.css';
import Clients from './components/clients/Clients';
import Main from './components/Main';
import Nav from './components/nav/Nav';
import { data } from './data';

function App() {
  const [client,setClient]=useState(data[0]);
  const [mobileView,setView]=useState(false);
  const [clientSelected,selectClient]=useState(false);
  const widthManagement=()=>{
    if(window.screen.width<=640){
      setView(true);
    }
    else setView(false);
  }
  window.addEventListener('resize',()=>{
    console.log(window.screen.width);
    widthManagement();
  })
  useEffect(()=>{
    widthManagement();
  },[])
  return (
    <div className="app">
      <div className='profile'>
            <p>Hi Sathish,</p>
            <i className="fa-sharp fa-solid fa-face-smile"></i>
        </div>
      <Nav/>
      {/*Below functionality will provide that in mobile view the content part will be visible only if we select the client */}
      {!mobileView && <><Clients setClient={setClient} selectClient={selectClient}/>
      <Main client={client}/></>}
        {mobileView && clientSelected && <Main client={client}/>}
        {mobileView && !clientSelected && <Clients setClient={setClient} selectClient={selectClient}/>}
      
    </div>
  );
}

export default App;
// ========================@sathish=========================