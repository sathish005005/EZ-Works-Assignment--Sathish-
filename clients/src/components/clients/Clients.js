import React, { useState } from 'react';
import './Clients.css'
import {data} from '../../data';
console.log(data);

const Clients = ({setClient}) => {
    const [descending,setDescending]=useState(true);
    const [active,setActive]=useState("");
    const handleClick=(client)=>{
      setActive(client.id);
      setClient(client);
    }
  return (
    <div className='clients'>
      <div className='header'>
      <header className='clients-heading'>
        <div className='heading'>
        <h1>Clients</h1>
        <i className={`${descending ?"fa-solid fa-arrow-down-wide-short":"fa-solid fa-arrow-down-wide-short"}`} onClick={()=>setDescending(!descending)}></i>
        <p>Creation Time</p>
        </div>
        <i className="fa-sharp fa-solid fa-square-plus"></i>
      </header>
      </div>
      <div className='clients-search'>
        <div className='search-bar'>
        <input className='search-input' placeholder='Company, Entity, User, Domain, Service, Location'/>
        <button><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>
      </div>
      <select>
        {
          data.map((client)=>{
            return (
              <option>{client.reg_date}</option>
            )
          })
        }
      </select>
      <div>
        {
          data.map((client)=>(
            <div className={`client-head ${active===client.id &&"client-head-active"}`} onClick={()=>handleClick(client)}>
              <div className={`client-title ${active===client.id &&"client-title-active"}`}>
                <p>{client.name || "Company Name"}</p>
                <p>{client.code || "CODE"}</p>
              </div>
              <div className={`client-counts ${active===client.id &&"client-counts-active"}`}>
                <p>{client.entities.length} Entities</p>
                <p>{client.user.length} Users</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Clients
