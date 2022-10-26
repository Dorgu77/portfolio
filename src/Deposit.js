
 import React from 'react'
 import {useState} from 'react'
 
 import { Route, Link, Routes, BrowserRouter as Router } from 'react-router-dom';
 





 export default function Deposit(){


//selection states
const[mod1, setMod1]=React.useState(true);
const[mod2, setMod2]=React.useState(true);
const[mod3, setMod3]=React.useState(true);
const[mod4, setMod4]=React.useState(true);
const[mod5, setMod5]=React.useState(true);

  // selection state functions
  function mode1(){
    setMod1(prevMod1 => !prevMod1)
  }
  function mode2(){
    setMod2(prevMod2 => !prevMod2)
  }
  function mode3(){
    setMod3(prevMod3 => !prevMod3)
  }
  function mode4(){
    setMod4(prevMod4 => !prevMod4)
  }
  function mode5(){
    setMod5(prevMod5 => !prevMod5)
  }
  

  
  const[mod9, setMod9]=React.useState({v1:"#1000", v2:"#2000", v3:"#5000", v4:"1#0000", v5:"#20000"});


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




{(mod1==true && mod2==true && mod3==true && mod4==true && mod5==true) && <div><h1 id="dc">please select deposit amount</h1></div>}
{(mod1!==true || mod2!==true || mod3!==true || mod4!==true || mod5!==true) && <div><h1 id="dc">Thank you for banking with us...</h1></div>}
<Link to='/'>home</Link>


{(mod1==true && mod2==true && mod3==true && mod4==true && mod5==true) && <div  id="contra">
<div  onClick={mode1} className="flx"><h1 className="ha">#1,000</h1></div>
<div  onClick={mode2} className="flx"><h1 className="ha">#2,000</h1></div>
<div  onClick={mode3} className="flx"><h1 className="ha">#5,000</h1></div>
<div  onClick={mode4} className="flx"><h1 className="ha">#10,000</h1></div>
<div  onClick={mode5} className="flx"><h1 className="ha">#20,000</h1></div>
<Link to='/Number'><div className="flx"><h1 className="ha">other</h1></div></Link>
</div>}




{(mod1!==true || mod2!==true|| mod3!==true|| mod4!==true|| mod5!==true) && <div className="rect">transaction successful your account has been credited with 
{(mod1!==true) && <div>{mod9.v1}</div>}
{(mod2!==true) && <div>{mod9.v2}</div>}
{(mod3!==true) && <div>{mod9.v3}</div>}
{(mod4!==true) && <div>{mod9.v4}</div>}
{(mod5!==true) && <div>{mod9.v5}</div>} 
</div>}








</div>
  );
}
