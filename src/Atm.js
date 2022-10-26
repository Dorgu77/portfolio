
 import React from 'react'
 import {useState} from 'react'

 import { Route, Link, Routes, BrowserRouter as Router } from 'react-router-dom';
 




var take= 234;
 export default function Atm(){







  return(
<div>

<nav id="n2">
        <span id="top4">
        <img src="usepic.png" />
        </span>
  <ul>  

  <Link  to="/Frontpage"><li>Home</li></Link>
<li> <a  target="blank" href="/">page</a></li>
</ul>
<span id="top6">..demo bank app</span>
    </nav>



<div><h1 id="dc"> First bank of Nigeria</h1></div>

  <div  id="contra">
    
  <Link to='/Cash'><div className="flx"><h1 className="ha">cash</h1></div></Link>
  <Link to='/Deposit'><div  className="flx"><h1 className="ha">deposit</h1></div></Link>
  <Link to='/Transfer'><div  className="flx"><h1 className="ha">transfer</h1></div></Link>
  <Link to='/Airtime'><div  className="flx"><h1 className="ha">airtime</h1></div></Link>
  <Link to='/Enquiry'><div  className="flx"><h1 className="ha">enquiry</h1></div></Link>
  <Link to='/Balance'><div  className="flx"><h1 className="ha">balance</h1></div></Link>
</div>


</div>
  );
}
