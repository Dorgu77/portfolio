
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
<span className="up"><a  href="#ab">About</a></span>
<span className="up"><a  href="#hir">Hire me</a></span>
<span className="up"><a href="myResume.pdf" download="Cv">download cv</a></span>
</div>
</nav>

    
        
            
    

       

<div className="plate2">
    <h2 id="portfollio" >..portfolio</h2>
   
    <span id="hello">Hello, Am </span><span id="mypic"><img  src="usepic.png"/></span>
    <h1 id="myname">DEIMO DORGU</h1> 
    <div id="mydescription">Am a frontend web developer.</div>
    
    <div className="rot2">
    <a  href="#hir"><span className="rot1">hire me</span></a>
    <a  href="#tah"><span className="rot1">portfolio</span></a>
    </div>
</div>


<h4 id="skills">Our Services</h4>

<div className="skillbox">


<div> <img src="frontend.png" /><h5 className="stacks">Front end</h5><div className="stackmid">we design and develop scalable frontend layouts from idea stage to product level..
Our engineers are equiped with skills like..<br/>
<div style={{textAlign:"center"}}>
<b>Javascript <br/>
Css <br/>
Html<br/>
React.js</b>
</div>
</div>
</div>

<div> <img src="backend.png" /><h5 className="stacks">Back end</h5><div className="stackmid">we design and develop scalable back end APIs and servers from idea stage to product level..
Our engineers are equiped with skills like..<br/>
<div style={{textAlign:"center"}}>
<b>Node.js <br/>
Express <br/>
</b>
</div></div></div>

<div> <img src="database.png" /><h5 className="stacks">DataBase</h5><div className="stackmid">we design and develop scalable frontend layouts from idea stage to product level..
Our engineers are equiped with skills like..<br/>
<div style={{textAlign:"center"}}>
<b>
Mysq<br/>
MongoDB<br/></b>
</div>
</div></div>


<div> <img src="mobile.png" /><h5 className="stacks">Android</h5><div className="stackmid">we design and develop scalable frontend layouts from idea stage to product level,
products are bulit for both android and ios platforms..
Our engineers are equiped with skills like..
<div style={{textAlign:"center"}}>
<b>
React native<br/>
Kotlin
<br/></b>
</div>
</div></div>

</div>

<br/><br/>
<div id="contact1">

<div className="exper">
 <h3>Experiences</h3>
 Front end web and mobile developer

 with three years of experience in freelance 
 and fulltime jobs...</div>

<br/>
<div id="inputs">
<a  id="hir"><span>Contact form</span></a>
                <form action="https://www.formsubmit.co/deimodorgutech@gmail.com" method="post">
            <input placeholder="company name"  style={{color:"orange", opacity:"0.6", fontSize:"20px"}} size="20" className="py" name="company" required type="text"onChange={gas}   value={ind.company} /><br/><br/>
            <input  placeholder="role"  style={{color:"orange", opacity:"0.6", fontSize:"20px"}} size="20" type="text"  className="py" name="role"  required onChange={gas}  value={ind.role} /><br/><br/>
            <input type="text" placeholder="country" style={{color:"orange", opacity:"0.6", fontSize:"20px"}} size="20" name="country" className="py"required onChange={gas} value={ind.country}  /><br/><br/>

            <input placeholder="stacks needed" style={{color:"orange", opacity:"0.6", fontSize:"20px"}} size="20" name="stacks" className="py" required type="text"onChange={gas}   value={ind.stacks} /><br/>
<br/>
            <select   className="boss" style={{color:"black", opacity:"0.6", width:"250px", fontSize:"14px", padding:"5px"}}   name="type" onChange={gas} valu={ind.type}>
                <option>select job type</option>
                <option>fully onsite</option>
                <option>fully remote</option>
            </select>
<br/>
<br></br>
        <button type="submit"  style={{color:"black", width:"250px", opacity:"0.6", fontSize:"13px", padding:"6px"}}  className="py">submit</button> </form> <h4 style={{opacity:"0.6", color:"white"}}>Or</h4> <a  target="blank" href="mailto:deimoddorgutech@gmail.com"><button  style={{color:"black", fontSize:"13px", opacity:"0.6", width:"250px", padding:"6px"}}  className="py">Send mail</button></a>
        
           
            
</div>
         <br/>   
<div className="exper">
<a id="ab"> <h3>About me</h3></a>
    Am dorgu deimo a front <br/>end web designer and <br />developer based in Nigeria.
    <br/> mobile: 08167693412
    <br/>Address: no 36 erepa road yenagoa<br/>
    Email:deimodorgutech@gmail
</div>
           </div>
            





     <br/>
<a id="tah"><div id="projhead">Recent projects</div></a>
<div className="projectbox">

<a  target="blank" href="
https://play.google.com/store/apps/details?id=baap.app&referrer=utm_source%3Dapps.facebook.com%26utm_campaign%3Dfb4a%26utm_content%3D%257B%2522app%2522%253A0%252C%2522t%2522%253A1671969462%252C%2522source%2522%253Anull%257D

"><div><span id="project1">Baap app</span><br /><img  src="baap.png"/></div></a>
<a  target="blank" href="https://play.google.com/store/apps/details?id=com.dr_recruiter"><div><span id="project2"> Recruiter</span><br /><img  src="dr.png"/></div></a>
<a  target="blank" href="http://13.235.74.134"><div><span id="project3">Bike site</span><br /><img  src="wep.png"/></div></a>
<a  target="blank" href="https://www.rainforestcafe.com"><div><span id="project4">forest cafe</span><br /><img  src="rainforest.png"/></div></a>
<a  target="blank" href="https://quizninja.netlify.app/#/"><div><span id="project5">   Quiz ninja</span><br /><img  src="ninja.png"/></div></a>
<a  target="blank" href="https://hoteltask.com/hoteltask/public/login
"><div><span id="project6">Hotel booking</span><br /><img  src="hotel.png"/></div></a>
</div>



<footer className="footer">
<br/>
<div className="social">
        <a  target="_blank" href="https://www.facebook.com/dorgu.deimo"><img src="reatface.png" /></a>
      <a  target="_blank" href="https://www.instagram.com/p/CVcgPRWMQWO/?igshid=YmMyMTA2M2"><img src="realinsta.png" /></a>
      <a  target="_blank" href="https://twitter.com/Deimo27279785/status/1570176314971136002?s=20&t=pQrF2a9T6Zo42IUUJtmCbA"><img src="realtwit.png" /></a>
      <a  target="_blank" href="mailto:deimoddorgutech@gmail.com"><img src="realwhats.png" /></a>
       
</div>
<div id="deimo">Dorgu Deimo page</div>
<div id="copywrite">@copywrite All rights reserved..</div>
</footer>

</div>
);
}


