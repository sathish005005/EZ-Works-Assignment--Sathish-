import React, { useState } from 'react';
import './MainHeader.css';

const MainHeader = ({client}) => {
    const [domain,extendDomain]=useState(false)
  return (
    <div className='main-header'>
        <div className='main-section'>
      <div className="section1">
        <div className='main-heading'>
        <i className="fa-solid fa-file-pdf"></i>
        <h2>Lucas Films Private Limited</h2>
        </div>
        <button>Edit</button>
      </div>
      <div className="section2">
        <div className="company">
        <h3>Company Code</h3>
        <p>{client.code || "LUCF"}</p><br/>
        <h3>Company Logo</h3>
        <p>{client.logo || "Unavailable"}</p>
        </div>
        <div className="domains">
            <h3>Domains</h3>
        {
          client.domains &&  client.domains.map((domain,index)=>(
              index<3 &&  <p>{domain}</p>
            ))
        }
        {!domain ? <p className='extend-domain' onClick={()=>extendDomain(!domain)}>+{client.domains.length-3} others</p>:
            client.domains.length>3 &&  client.domains.map((domain,index)=>(
                index>=3 &&  <p>{domain}</p>
              ))
          }
        </div>
        </div>
      </div>
    </div>
  )
}

export default MainHeader
