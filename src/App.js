
 import React from 'react'
 import Phome2 from "./Phome2.js"
import "./Allstyle.css"
import Contact from "./Contact.js"
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
 
 
 


 export default function App(){
     
    
return( <div>
<Router>
    <Routes>
<Route path="/" element={<Phome2 />}/>
<Route path="Contact" element={<Contact />}/>
</Routes>
 </Router>
</div>
);
 }
