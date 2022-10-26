
 import React from 'react'
 import {useState} from 'react'
 
 import { Route, Link, Routes, BrowserRouter as Router } from 'react-router-dom';
 





 export default function Balance(){







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
<span id="top2">..demo bank app</span>
    </nav>





<div><h1 id="dc">Available balance</h1></div>
<Link to='/'>welcome page</Link>
  <div  id="contra">
    

<div className="rect">your available balance is</div>

</div>


</div>
  );
}
