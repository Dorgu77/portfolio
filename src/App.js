
 import React from 'react'
 import Phome2 from "./Phome2.js"
 import Atm2 from "./Atm2.js"
 import Atm from "./Atm.js"
 import Number from "./Number.js"
 import Frontpage from "./Frontpage"
 import  End from "./End.js"
 import  Enquiry from "./Enquiry.js"
 import  Deposit from "./Deposit.js"
 import  Withdrawal from "./Cash.js"
 import  Balance from "./Balance.js"
 import  Payment from "./Payment.js"
 import  Transfer from "./Transfer.js"
import  Airtime from "./Airtime.js"
import "./Allstyle.css"
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
 
 
 


 export default function App(){
     
    
return( <div>



<Router>

<Routes>
 <Route exact path='/' element={<Phome2 />} />
 <Route path='/Atm2' element={<Atm2 />} />
 
 <Route  path='/Atm' element={<Atm />} />
 <Route path='/Deposit' element={<Deposit />} />
 <Route path='/Cash' element={<Withdrawal />} />
 <Route path='/End' element={<End />}  />
 <Route path='/Payment' element={<Payment />} />
 <Route path='/Transfer' element={<Transfer />} />
 <Route path='/Enquiry' element={<Enquiry />} />
 <Route path='/Airtime' element={<Airtime />} />
 <Route path='/Number' element={<Number />} />
 <Route path='/Balance' element={<Balance />} />
 
</Routes>

</Router>

</div>
);
 }
