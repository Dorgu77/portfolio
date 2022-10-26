
 import React from 'react'
 import {useState} from 'react'
 
 import { Route, Link, Routes, BrowserRouter as Router } from 'react-router-dom';
 





 

 export default function Frontpage(){
     



  const[dame, setDame]=React.useState();
  function boy(event){
    setDame(event.target.value)
  }

  
  const[amount, setAmount]=React.useState();
  function ama(event){
    setAmount(event.target.value)
  }
  

  var dame2=200000;
  var amount2=300000;

var fuck=function(){
  if(dame==dame2 && amount==amount2){

    return <Link to='/Atm'><button>continue</button></Link>

  }
}


  return(<div>
    
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


   <h1 id="dc">..welcome to first bank...</h1>

     <h2 id="hc">please enter pin</h2>


     
  <div  id="contra">





<div  className="blk">

<form>
accnt number<input type="number" required name="number" onChange={boy} />
<br/>
Pin<input type="number" required name="amount" onChange={ama} />
<br/>

<button onClick={fuck}>Login</button>
<br/>
<fuck />
</form>

</div>




</div>
</div>
  );
}







  