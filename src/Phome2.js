
 import React from 'react'
 import {useState} from 'react'
 
 import {Link} from 'react-router-dom';
 
 




    export default function Phome2 (){

  

        const[ind, setInd] =React.useState({company:"", role:"", country:"", description:"", stacks:"", type:""}) 
        function gas(event){
            setInd(prevInd=>{
                return {
                
                [event.target.name]:event.target.value
            }})}
        


return(
<div>
<nav>
<div id="firstcode">
<a  href="#ab">About</a>
<a  href="#hir">Hire me</a>
</div>
</nav>

    
        
    

       

<div className="plate2">
    <h2 id="portfollio" >..portfolio</h2>
   
    <span id="hello">Hello, Am </span><span id="mypic"><img  src="usepic.png"/></span>
    <h1 id="myname">DEIMO DORGU</h1> 
    <div id="mydescription">Am a frontend web developer..</div>
    
    <div className="rot2">
    <a  href="#hir"><span className="rot1">hire me</span></a>
    <a  href="#tah"><span className="rot1">portfolio</span></a>
    </div>
</div>


<h1 id="skills">Acquired Skills</h1>

<div className="skillbox">
<div><span id="html">Html</span><img src="html.png"/></div>
<div><span id="css">Css</span><img src="css.png"/></div>
<div><span id="javascript">Javascript</span><img src="JavaScript.png"/></div>
<div><span id="react">React.js</span><img src="react.png"/></div>
<div><span id="node">Node.js</span><img src="node.png"/></div>
<div><span id="express">Express.js</span><img src="express.png"/></div>
</div>

<br/><br/>
<div id="contact1">
<div className="exper">
 <h3>Experiences</h3>
Front end developer

 Three years of experience in freelance 
 and fulltime jobs...</div>

<br/>
<div id="inputs">
<a  id="hir"><span id="soap">Contact form</span></a>
                <form action="https://www.formsubmit.co/deimodorgutech@gmail.com" method="post">
            <input placeholder="company name"  size="45" className="py" name="company" required type="text"onChange={gas}   value={ind.company} /><br/><br/>
            <input  placeholder="role" size="45" type="text"  className="py" name="role"  required onChange={gas}  value={ind.role} /><br/><br/>
            <input type="text" placeholder="country"  size="45" name="country" className="py"required onChange={gas} value={ind.country}  /><br/><br/>

            <input placeholder="stacks needed" size="45" name="stacks" className="py" required type="text"onChange={gas}   value={ind.stacks} /><br/>
<br/>
            <select  className="py" name="type" onChange={gas} valu={ind.type}>
                <option>select job type</option>
                <option>fully onsite</option>
                <option>fully remote</option>
            </select>
<br/>
<br></br>
        <button type="submit"  className="py">submit</button>
            </form></div>
         <br/>   
<div className="exper">
<a id="ab"> <h3 id="n4">About me</h3></a>
    Am dorgu deimo, a front end web designer and developer based in Nigeria.<br/>
    mobile: 08167693412 <br/>
    Address: no 36 erepa road yenagoa<br/>
    Email:deimodorgutech@gmail
</div>
           </div>
            





     <br/>
<a id="tah"><div id="projhead">..portfolio projects</div></a>
<div className="projectbox">

<a  target="blank" href="/Atm"><div><span id="project1">project1</span><img  src="laaap.png"/></div></a>
<a  target="blank" href="#"><div><span id="project2">project2</span><img  src="usepic.png"/></div></a>
<a  target="blank" href="#"><div><span id="project3">project3</span><img  src="paath.png"/></div></a>
<a  target="blank" href="#"><div><span id="project4">project4</span><img  src="coder.png"/></div></a>
<a  target="blank" href="#"><div><span id="project5">project5</span><img  src="physic.png"/></div></a>
<a  target="blank" href="#"><div><span id="project6">project6</span><img  src="travel.png"/></div></a>
</div>


<footer className="footer">
<br/>

<div className="social">
        <a  target="_blank" href="https://www.facebook.com/dorgu.deimo"><img src="Facebook.png" /></a>
      <a  target="_blank" href="https://www.instagram.com/p/CVcgPRWMQWO/?igshid=YmMyMTA2M2"><img   src="instagram.png" /></a>
      <a  target="_blank" href="https://twitter.com/Deimo27279785/status/1570176314971136002?s=20&t=pQrF2a9T6Zo42IUUJtmCbA"><img   src="twitter.png" /></a>
      <a  target="_blank" href="mailto:deimoddorgutech@gmail.com"><img   src="email.png" /></a>
       
</div>
<div id="deimo">Dorgu Deimo page</div>
<div id="copywrite">@copywrite</div>
</footer>

</div>
);
}


