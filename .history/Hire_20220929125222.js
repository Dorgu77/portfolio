
import React from 'react'
import {useState} from "react"
import {Link} from 'react-router-dom';




export default function  Hire(){
const[ind, setInd] =React.useState({company:"", role:"", country:"", description:"", stacks:"", type:""}) 

function gas(event){
    setInd(prevInd=>{
        return {
        
        [event.target.name]:event.target.value
    }})}



    return(
        <div>

<nav id="n2">

<span id="top">
        <img src="usepic.png" />
        </span>

  <ul>  
<li><Link to='/'>Home</Link></li>
<li><Link to='/Hire'>hire me</Link></li>
</ul>
<span id="top2">..portfolio page</span>
    </nav>

            <div id="hiret">
                <span id="soap">please kindly fill out the form below</span>


                <form action="https://www.formsubmit.co/deimodorgutech@gmail.com" method="post">
            <input placeholder="company name" className="py" name="company" required type="text"onChange={gas}   value={ind.company} /><br/><br/><br/>
            <input  placeholder="role" type="text"  className="py" name="role"  required onChange={gas}  value={ind.role} /><br/><br/><br/>
            <input type="text" placeholder="country"  name="country" className="py"required onChange={gas} value={ind.country}  /><br/><br/><br/>

            <textarea  row="40" col="40" name="description" placeholder="job description" required className="py" onChange={gas}  value={ind.description} /><br/><br/><br/>

            <input placeholder="stacks needed" name="stacks" className="py" required type="text"onChange={gas}   value={ind.stacks} /><br/><br/>

<br/>
            <select  className="py" name="type" onChange={gas} valu={ind.type}>
                <option>select job type</option>
                <option>fully onsite</option>
                <option>fully remote</option>
            </select>
<br/>
<br/><br/>
        <button type="submit"  className="py">submit</button>
            </form>
    
</div>


        </div>
    );
}