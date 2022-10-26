
 import React from 'react'
 import {useState} from 'react'
 
 import { Route, Link, Routes, BrowserRouter as Router } from 'react-router-dom';
 





 export default function Atm2(){









  return(
<div>


<nav id="n2">
        <span id="top">
        <img src="usepic.png" />
        </span>
  <ul>  
<Link  to="/Frontpage"><li>Get started</li></Link>
<li> <a  target="blank" href="/">Home page</a></li>
</ul>
<span id="top2">..demo bank app</span>
    </nav>






<div><h1 id="dc">please select your transaction amount</h1></div>
<Link to='/'>welcome page</Link>
  <div  id="contra">

<Link to='/Payment'><div className="flx"><h1 className="ha">#1,000</h1></div></Link>
<Link to='/Payment'><div className="flx"><h1 className="ha">#2,000</h1></div></Link>
<Link to='/Payment'><div className="flx"><h1 className="ha">#5,000</h1></div></Link>
<Link to='/Payment'><div className="flx"><h1 className="ha">#10,000</h1></div></Link>
<Link to='/Payment'><div className="flx"><h1 className="ha">#20,000</h1></div></Link>
<Link to='/Number'><div className="flx"><h1 className="ha">other</h1></div></Link>
</div>


</div>
  );
}
