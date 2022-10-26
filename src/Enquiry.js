
 import React from 'react'
 import {useState} from 'react'
 
 import { Route, Link, Routes, BrowserRouter as Router } from 'react-router-dom';
 





 export default function Enquiry(){









  return(
<div>

<nav id="n2">
        <span id="top">
        <img src="usepic.png" />
        </span>
  <ul>  
<li><a  href="#ab">About</a></li>
<li> <a  href="#hir">hire me</a></li>
</ul>
<span id="top">..demo bank app</span>
    </nav>




<div><h1 id="dc">Get started</h1></div>
<Link to='/'>home</Link>
  <div  id="contra">

<Link to='/Balance'><div className="flx"><h1 className="ha">contact</h1></div></Link>
<Link to='/Balance'><div className="flx"><h1 className="ha">FAQ</h1></div></Link>
<Link to='/Balance'><div className="flx"><h1 className="ha">pin</h1></div></Link>

</div>


</div>
  );
}
