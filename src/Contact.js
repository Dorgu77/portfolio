
 import React from 'react'
 import {useState} from 'react'
 import {Link} from 'react-router-dom';
 //import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 //import { faCoffee, faArrowRight, faCog, faGears, fahome, faNavicon, faBell, faEnvelope, faArrowLeft,  faUsers, faTv, faUniversity, faCartPlus, faCircle, faSearch, faLock, faAdjust, faBook, faFolder, faQuestion, faMoon, faToggleOn, faVideoCamera, faHistory, faNewspaper, faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';
//import { faExpeditedssl } from '@fortawesome/free-brands-svg-icons';





    export default function Contact (){

  
        const[ind, setInd] =React.useState({company:"", role:"", country:"", description:"", stacks:"", type:""}) 
        function gas(event){
            setInd(prevInd=>{
                return {
                
                [event.target.name]:event.target.value
            }})}
        

//<FontAwesomeIcon   className="itemcon2" icon={faBook}></FontAwesomeIcon>

return(
<div>
<nav>
<div id="firstcode">
<span className="up"><Link to="/">Home</Link></span>
</div>
</nav>



<br />
<br />
<div id="inputs">
<span id="tok">Contact form</span>
                <form action="https://www.formsubmit.co/deimodorgutech@gmail.com" method="post">
            <input placeholder="company name"   size="24"  name="company" required type="text"onChange={gas}   value={ind.company} /><br/><br/>
            <input  placeholder="role"   size="24" type="text"  className="py" name="role"  required onChange={gas}  value={ind.role} /><br/><br/>
            <input type="text" placeholder="country" size="24" name="country" className="py"required onChange={gas} value={ind.country}  /><br/><br/>

            <input placeholder="stacks needed"  size="24" name="stacks"  required type="text"onChange={gas}   value={ind.stacks} /><br/>
<br/>
            <select    name="type" onChange={gas} value={ind.type}>
                <option>select job type</option>
                <option>fully onsite</option>
                <option>fully remote</option>
            </select>
            </form>
<br/>
<br></br>


<span>  <button type="submit" >submit</button>              <span style={{opacity:"0.6", color:"white"}}>Or</span>                  <a  target="blank" href="mailto:deimoddorgutech@gmail.com"><button  style={{color:"black", fontSize:"19px", opacity:"0.6", padding:"8px"}}  className="py">Send mail</button></a></span>
  
           </div>
            





<footer className="footer2">
<br/>




<div className="social2">
        <a  target="_blank" href="https://www.facebook.com/dorgu.deimo"><img src="darkface.png"/></a>
      <a  target="blank" href="https://www.instagram.com/p/CVcgPRWMQWO/?igshid=YmMyMTA2M2"><img src="darkinst.png" /></a>
      <a  target="_blank" href="https://twitter.com/Deimo27279785/status/1570176314971136002?s=20&t=pQrF2a9T6Zo42IUUJtmCbA"><img src="darkowit.png" /></a>
      <a  target="_blank" href="mailto:deimoddorgutech@gmail.com"><img src="darkwats.png" /></a>
       
</div>
<div className="deimo2">Dorgu Deimo page</div>
<div className="copywrite2">@copywrite All rights reserved..</div>
</footer>

</div>
);
}


