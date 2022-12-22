import React, { useState } from 'react';
import './Content.css';

const Content = ({client}) => {
    const [activeNav,setActiveNav]=useState({entities:true});
    const [activeEntity,setActiveEntity]=useState(1);
    const activateEntity=(id)=>{
        if(activeEntity===id) setActiveEntity("");
        else setActiveEntity(id);
    }
  return (
    <div className='content-division'>
      <nav>
        <ul>
            <li className={`${activeNav.entities && "active"}`} onClick={()=>setActiveNav({entities:true})}>ENTITIES</li>
            <li className={`${activeNav.invoice && "active"}`} onClick={()=>setActiveNav({invoice:true})}>INVOICE CODES</li>
            <li className={`${activeNav.users && "active"}`} onClick={()=>setActiveNav({users:true})}>USERS</li>
        </ul>
      </nav>
      <div className='main-content'>
        {
            activeNav.entities && 
            <div className='entities'>
                <div className='content-heading'>
                    <h2>4 Entities</h2>
                    <i className="fa-sharp fa-solid fa-square-plus"></i>
                </div>
                <table>
                    <thead className='table-collection'>
                        <th>Billing Location</th>
                        <th>Entity Name</th>
                        <th>Entity Code</th>
                        <th>MSLA valid through</th>
                        <th>External</th>
                    </thead>
                    <tbody>
                    {
                        client.entities.map((entity)=>(
                            <>
                            <tr className='table-collection'>
                                <td>{entity.billing_location}</td>
                                <td>{entity.entity_name}</td>
                                <td>{entity.entity_code}</td>
                                <td>{entity.MSLA_valid}</td>
                                <td>{entity.file_sharing}</td>
                                <i className={activeEntity===entity.entity_id ?"fa-solid fa-angle-up" : "fa-solid fa-angle-down"} onClick={()=>activateEntity(entity.entity_id)}></i>
                            </tr>
                            {activeEntity===entity.entity_id && <td colSpan='6'>
                            <table className='details-table'><tbody>
                                <tr>
                                    <td>
                                    <h2>Address</h2>
                                    {entity.address.map((address)=>(<p>{address}</p>))}
                                    </td>
                                    <td>
                                    <h2>Company Registration Number</h2>
                                    <p>{entity.company_reg_number}</p><br/>
                                    <h2>Company Registration Validity</h2>
                                    <p>{entity.company_reg_validity}</p>
                                    </td>
                                    <td>
                                    <h2>TAX Registration Number</h2>
                                    <p>{entity.TAX_reg_number}</p><br/>
                                    <h2>TRN Validity</h2>
                                    <p>{entity.TRN_validity}</p>
                                    </td>
                                    <i class="fa-solid fa-pen-to-square"></i>
                                </tr>
                                <tr>
                                    <td>
                                        <h2>Charge Code / PO Number</h2>
                                        <p>{entity.charge_code}</p>
                                    </td>
                                    <td>
                                        <h2>Duration of File Storage</h2>
                                        <p>{entity.duration_of_storage}</p>
                                    </td>
                                    <td>
                                        <h2>Currency</h2>
                                        <p>{entity.currency}</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan='2'>
                                        <h2>MSLA</h2>
                                        <p>{entity.MSLA}<i1 class="fa-solid fa-eye"></i1><i2 class="fa-solid fa-download"></i2></p>
                                    </td>
                                    <td>
                                        <h2>VAT+WHT</h2>
                                        <p>{entity.vat+"+"+entity.wht}</p>
                                    </td>
                                </tr>
                                {/* <tr >
                                    <h2>corporate_price_per_MSLA</h2>
                                   <table>
                                    <thead className='table-collection'>
                                    <th>service</th>
                                    <th>Unit</th>
                                    <th>list price</th>
                                    <th>Offered price</th>
                                    <th>Discount</th>
                    </thead>
                    </table>
                    <tbody>
                    <tr className='table-text'>
                                <td>Arabic Language Translation</td>
                                <td>Words</td>
                                <td>0.1</td>
                                <td>0.09</td>
                                <td>10% ( 19% )</td>
                                </tr>   
                    </tbody>
                    </tr>    */}


                            </tbody></table></td>
                            }
                            </>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        }
      </div>
    </div>
  )
}

export default Content
