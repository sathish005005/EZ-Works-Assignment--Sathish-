import React from 'react';
import Content from './content/Content';
import MainHeader from './mainheader/MainHeader';

const Main = ({client}) => {
  return (
    <div className='main'>
      <MainHeader client={client}/>
      <Content client={client}/>
    </div>
  )
}

export default Main
