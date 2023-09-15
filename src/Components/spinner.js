import React, { Component } from 'react';

const Spinner=(props)=>{
 
   let  {Loading}=props
    return (
      <div className='text-center'>
        <img src={Loading} alt="News Item" width={50} height={50} />
      </div>
    );
  }


export default Spinner;