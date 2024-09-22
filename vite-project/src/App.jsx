import React from 'react';
import { useState } from 'react';

import './App.css'
import {Footer} from "./Components/Footer";

function App() {
 const [todos, setTodos] = useState([
  {
    title:"class",
    description:" i have cohort class at evening at 8 pm"
  },
  {
   title:"play",
   description:" i have to play  at 10 am for the interschool"
 }
 ]);

 


  return (
  <div>
    <Footer/>
    <Button onclick={()=>{
         setTodos(todos={todos});
    }} />
    
      
     
    </div>
  )
}
function Button({}){
return <div>
  <button>Add todos</button>
</div>
}
export default App
