
 import React from 'react'
 import {useState} from 'react'
 
 import { Route, Link, Routes, BrowserRouter as Router } from 'react-router-dom';
 





 

 export default function Transfer(){
     
  const[sis, setSis]=React.useState(true);
function bress(event){

    setSis(prevSis => !prevSis)
}



  const[dame, setDame]=React.useState();
  function boy(event){
    setDame(event.target.value)
  }

  
  const[amount, setAmount]=React.useState();
  function ama(event){
    setAmount(event.target.value)
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



   {(sis==true) && <h1 id="dc">
     please enter beneficiary account!!
     <br/>
  and tranfer amount..</h1>}
   {(sis!==true) && <h1 id="dc">Thank you for banking with us..</h1>}


<Link to='/'>welcome page</Link>
  <div  id="contra">





{(sis==true) && <div  className="blk">

number<input type="number" name="number" onChange={boy} />
<br/>
amount<input type="number" name="amount" onChange={ama} />
<br/>
<button onClick={bress}><h1 className="ha">proceed</h1></button>
</div>}




{(sis!==true) && <div className="rect">transaction successful your account {dame}has been credited with #{amount}</div>}

</div>
</div>
  );
}







  