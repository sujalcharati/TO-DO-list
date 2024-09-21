import React from 'react';
import { useState } from 'react';

import './App.css'
import {Footer} from "../Components/Footer";

function App() {
 const [todos, setTodos] = useState(0);
  return <div>
    <Footer/>
    <Button title={title} description={description}/>
      
     
    </div>
  
}
function Button({title,description}){
return <div>
  <h1>
    Title :{title}
  </h1>
  <h5>
    Description: {description}
  </h5>
</div>
}
export default App
