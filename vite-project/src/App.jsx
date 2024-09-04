import React from 'react';
import { useState } from 'react';

import './App.css'
import Footer from "../Components/Footer";

function App() {
 
  return (
    <>
    <Footer/>
      
     
    </>
  )
}
function button({title,description}){
return <div>
  <h1>
    {title}
  </h1>
  <h5>
    {description}
  </h5>
</div>
}
export default App
