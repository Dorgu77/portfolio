
 import React from 'react'
 import Phome2 from "./Phome2.js"
import  Hire from "./Hire.js"
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
 
 
 


 export default function App(){
     
    
return( <div>


    
<Router>

<Routes>
 <Route exact path='/' element={<Phome2 />} />
 <Route path='/Hire' element={<Hire />} />
 
</Routes>

</Router>
</div>
);
 }
