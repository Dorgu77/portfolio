
 import React from 'react';
 


//props
function Jus(props){
    return (<div><h2>testing the mic by engr  {props.name} {props.num}{props.voice}</h2></div>);
}


 // props deconstruction
function Jus({name, age, song}){

    return (<div>
        <div id='sel' className='do'>
        <h1>{name}</h1>

       <h2>{age}</h2>
       <br/>
       <h2>{song}</h2>
       <img src="logo192.png" alt="react"/>
       
       <br/>

       </div>
    </div>);
    }


//exported app component
 export default function App(){
    return (<div>   
               
<Jus  age="24" name="lyricist"  song="oluwa"/>      
        </div>);
    }



//component and composition
export default function App() {
    const colt={color:"red"};
    const we = <h3> oboi na so</h3>;

    return ( <div>    
         <div className="do"> 
    <h1 style={colt} > tell me her 
    for her ear </h1>
    <h4 className="cp"> thanks {we} </h4>
<Jus  num="87" name="ruger bad man"
voice="alto"/>
</div>
       
        </div>);
    }



    function Jus(props){

        return (<div><h2>artiste {props.name} fans {props.fan} voice type{props.voice}</h2>
        <button>{props.collect}</button>
        
        </div>);


//passing different instances of props to a component  

export default function App() {
    return ( <div>    
         <div className="do"> 
    
<Jus  fan="87" name="rasta"
voice="alto" collect="recieve" />

<Jus fan="45" name="rap god"
voice="tenure" collect="send"/>

<Jus  fan="17" name="rock"
voice="suprano" collect="take" />

</div>
       
        </div>);
    }

//mapping over an array and creating a list
var arr=[34,56,67,89];
var see=["talented","joyfriend","nigas","badman","welcome"]
 function Jus(props){
     //passing keys id to an array (variable or component) 
     const ans=arr.map(item=>{return <ul><li key={item}>{item+9}</li></ul>});

    return (<div>
        <div className='do'>
       <h1>{ans}</h1>
       </div>
    </div>);
    }

    

// react forms and images
function Jus(props){
    const pla=props.fan==87? "popular": "unknown man"
    
    
     return (<div>
         <div className='do'>
         <h1>{props.name}</h1>
        <h2>{pla}</h2>
        <form><input type="text" name="test"/></form>
        <img src="logo192.png" alt="image"/>
        </div>
     </div>);
     }
 
 
 //exported app component
  export default function App(){
     return (<div>    
           
 <Jus  fan="87" name="rasta"song="bless"/>
 <br/>
 <Jus fan="34" name="rap god" song="on  one"/>
 <br/>
 <Jus  fan="17" name="rock" song="no love"/>
        
         </div>);
     }
 



//conditional rendering
function Jus(props){
    const pla=props.fan===87? "popular": "unknown man"
    
    
     return (<div>
         <div className='do'>
        <h1>{props.name}</h1>
        <h2>{pla}</h2>
 
        </div>
     </div>);
     }
 


     //state storing a single input data
     import { useState } from 'react';

     
 function Jus(props){
    const [fname, setFname] = React.useState("")
 
 
 function boy(event){
     setFname(event.target.value)
 }
 var ad=fname + 23;
 
     return (<div>
         <div id='sel' className='do'>
         <h1>{props.name}</h1>
        <h2>{pla}</h2>
        <form><input type="text"  onChange={boy} id="fo"  /></form>
        <img src="logo192.png" alt="react"/>
        <button>offering box</button>
 <h5>try am {ad}</h5>
 
        </div>
     </div>);
     }
 
 
 //exported app component
  export default function App(){
     return (<div>          
 <Jus  fan="87" name="rasta"  song="bless"/>      
         </div>);
     }
 
     
     
// state storing more than one text inputs data
 function Jus(props){
    const [infom, setInfom] = React.useState({ bio:"" , age:""})
 
 function sav(event){
     setInfom(prevInfom=>{
         return {
         
         [event.target.name]:event.target.value
     }})
     }
 
 
     return (<div>
         <div id='sel' className='do'>
         <h1>{props.name}</h1>
 
        <form>
            <input type="text" name="bio" onChange={sav} value={infom.bio}/>name
            <input type="text"name="age" onChange={sav} value={infom.age}/>age
        </form>
        <h1>{infom.age}</h1>
        <img src="logo192.png" alt="react"/>
        <button>open tab</button>
        <br/>
        <button> close tab</button>
 
        </div>
     </div>);
     }
 
 
 //exported app component
  export default function App(){
     return (<div>          
 <Jus  fan="87" name="rasta"  song="bless"/>      
         </div>);
     }
 
 

// state storing checkbox and radio inputs and text inputs using ternary conditions 
function Jus(props){
    const [infom, setInfom] = React.useState({ bio:"" ,
     devorced:true , status:true , password:"" , repassword:""})
 
 function sav(event){
 
 
     const {name, value, type, checked}=event.target
 
     setInfom(prevInfom=>{
         return {
 
         ...prevInfom,
         [name]:type === "checked" ? checked : value
     }})
     }
 
 // submmtting function
 function subm(event){
     event.preventDefault();
 // form validation using if else statement
 
 if(infom.bio===""){
 alert("bio cant be fucking empty")
 }
 else if(infom.password!==infom.repassword)
 {
 alert("reteype password")}
 
 //code for submitting all form details to API/back end (infom)
 
 }
 
 
     return (<div>
         <div id='sel' className='do'>
         <h1>{props.name}</h1>
 
        <form onSubmit={subm}> 
            <input type="text" name="bio" onChange={sav} value={infom.bio}/>name
 
           <input type="checkbox" name="devorced" onChange={sav} />devorced
           <input type="radio" name="status" value="single" onChange={sav} />status
           <br/>
            <input type="password" name="password" onChange={sav} value={infom.age}/>password
            <br/>
            <br/>
            <input type="password" name="repassword" onChange={sav} value={infom.age}/>retype password
            <br/>
            <!-- if the submit button is within the form tag it submits the form data when clicked -->
            <button>submit</button>
        </form>
        <h1></h1>
        <img src="logo192.png" alt="react"/>
        <button>open tab</button>
        <br/>
        <button> close tab</button>
 
        </div>
     </div>);
     }
 
 
 
 
 //exported app component
  export default function App(){
     return (<div>          
 <Jus  fan="87" name="rasta"  song="bless"/>      
         </div>);
     }



//state management using one button
import { useState } from 'react';

 function Jus(props){
    const [on, setOn] = React.useState(props.on)
    
 const styles={backgroundColor:on ? "blue":"orange"}
 
 
 function press(event){
     setOn(prevOn => !prevOn)}
 
 
 
     return (<div>
         <div id='sel' className='do'  onClick={press} style={styles} >
         <h1>{props.name}</h1>
     
        <form>
            
            <input type="text"   />firstname
            <input type="text" />  lastname
        </form>
        <img src="logo192.png" alt="react"/>
        <button>offering box</button>
 <h5>try am </h5>
 
        </div>
     </div>);
     }


     //state management using two buttons
 import { useState } from 'react';
 function Jus(props){
    const [on, setOn] = React.useState(true)
 const styles={height:on ? "500px":"300px",
 width:on? "500px":"300px",
 backgroundColor:on ? "blue":"orange"
 }
 
 // f1 opening state function
 function open(event){
     setOn(prevOn => !prevOn)
 
 }
 
 
 //f2 closing state function
 function close(event){
     setOn(prevOn => !prevOn)
 
 }
     return (<div>
         <div id='sel' className='do' style={styles}>
         <h1>{props.name}</h1>
     <nav>
         <h3>welcome</h3> <h3>holding</h3> <h3>weeding</h3>
     </nav>
        <form>
            <input type="text"/>firstname
            <input type="text" />  lastname
        </form>
        <img src="logo192.png" alt="react"/>
        <button onClick={open}>open tab</button>
        <br/>
        <br/>
        <button onClick={close}>close tab</button>
 <h5>try am</h5>
 
        </div>
     </div>);
     }
 
 
 
 
 //exported app component
  export default function App(){
     return (<div>          
 <Jus  fan="87" name="rasta"  song="bless"/>      
         </div>);
     }
 

   //state not needing the previous value(counter)
   
import { useState } from 'react';

 function Jus(props){
    const [num, setNum] = React.useState(0)
 const lot={backgroundColor:"yellow", borderRadius:"50%",
 height:"50px", width:"50px", color:"black", fontSize:"40px"
 }
 
 
 function plus(event){
     setNum(num+1)
 }
 
 
 function minus(event){
     setNum(num-1)
 }
     return (<div>
         <div id='sel' className='do'>

        
 <div  onClick={plus}  style={lot} >+</div>
 <br/>
 <div onClick={minus} style={lot}>-</div>
 <div ><h1 style={lot}>{num}</h1> </div>
        
        </div>
     </div>);
     }
 
 
 
 //exported app component
  export default function App(){
     return (<div>          
 <Jus  fan="87"/>      
         </div>);
     }
 

     //useeffect hook inside components
function Jus({department}){  

    const [user, setUser]=React.useState({course:"", password:""})
    
function take(event){
    setUser(prevUser=>{return {
         [event.target.name]:event.target.value}      
})}
  
// the useeffect hook is used to handle activities outside raect 
//it runs everytime the component renders or anytime the page refreshes
//its continuouss run can be avoided by using a dependency array [] it can also 
//specify when its run like only when a particular state changes and not
//everytime.  
useEffect(()=>{
    
fetch("http//:www.google.com")
.then((response) => {
// code for handling response 
     }); }, []);



     return (<div>
        <div id='sel' className='do'>
        
       <br/>
    
       <h1>{department}</h1>
    <input type="text" value={user.course} onChange={take}/> course
       <br/>
       <input type="password" value={user.password} onChange={take}/>password 

       </div>
    </div>);
    }


//exported ecomponent
 export default function App(){
    return (<div>   
               
<Jus  department="electrical" />      
        </div>);
    }

    
     //hambugre menu using state management using two buttons
     
     export default function Pcontact(props){
        const [on, setOn] = React.useState(true)
     const styles={height:"400px",
     width:on? "200px":"0px",
     backgroundColor:on ? "blue":"orange",
     transition:"width",
     duration:"2s"
     
     }
     
     // f1 opening state function
     function open(event){
         setOn(prevOn => !prevOn)
     
     }
     
     
     //f2 closing state function
     function close(event){
         setOn(prevOn => !prevOn)
     
     }
         return (<div>
            
            
         <nav>
         <div style={styles}>

             
            <button onClick={open}>open tab</button>
            <br/>
            <br/>
            <button onClick={close}>close tab</button>
     
         </div>
             
         </nav>
            
         </div>
         );
         }








    
// todlist using useState
function Jus({department}){  

    const [todo, setTodo] = React.useState([])
    const [text, setText] = React.useState("")
    
function put(event){
    setTodo([
        ...todo,text])
    
            setText("")
        }
    
return (<div>
        <div id='sel' className='do'>
        
       <br/>
    
       <h1>{department}</h1>
    <input type="text" value={text} onChange={e => setText(e.target.value)}/> course
       <br/><button onClick={put}>add todo</button>

       <ul>
           {todo.map(item=>{ return<li>{item}</li>})}
       </ul>
       </div>
    </div>);
    }


//exported ecomponent
 export default function App(){
    return (<div>   
               
<Jus  department="electrical" />      
        </div>);
    }



    // react router is used to navigate between different pages without actually 
    // loading a new page , it just updates the ui using the routed link path
    //from the provided nav component
import {Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Contact from './Contacts'
import  About from './About'
import Home from './Home'

// error component
function error(){
    const err="NOT FOUND"
    return(
        <div>
            <H1>{err}</H1>
        </div>
    );
}

// nav component
function Nav(){
    return(
        <div>
            <ul>
 <li><link to="/">Home</link></li>
 <li><link to="/Contacts">Contacts</link></li>
<li><link to="/About">About</link></li>
            </ul>
        </div>
    );
}
    
//exported ecomponent
 export default function App(){
    return (<div>

        
    </div>
);
    }

    // useContext this used by a component on a lower tree to access data
    // from a component above with out passing it  as props
    
   // main component  
 import React, {createContext} from 'react'
 import compm from  "./compm"
 
export const deim=createContext();

//exported App component
 export default function App(props){

props.gender ="male";
    return (
<div>
    <deim.provider value={gender}>
<compm />
</deim.provider>
</div>
    );
    }

    // exported component compm
    import React from 'react'
    import component2 from "./component2"
   
 
   export default function compm(){
       
       return ( <div>
           <component2/>
           </div>
       );
   }
   

   // import React, {useContext} from 'react'
 import {deim} from "./App"


 //exported component2
 export default function component2(){
     
 const last = useContext(deim);
 
     return ( <div>
         <h1> welcome {last} </h1>
         </div>
     );
     }
  


  // useRef this hook is used to aceess DOM elements
 import React, {useEffect, useRef} from 'react'
 import wolverine from   "/.wwolverine.mp4"
 
 function bad(){
     const vid=useRef(null);

     useEffect(()=> {
         vid.current.play();
     }, [])
return(
    <div>
        <video src={wolverine} ref={vid}/>
    </div>
);
 }

 // react tables
 import React from 'react'
 import React Table from 'react-Table';
 

 export default function Sign(){
const data= [{name:"deimo", age:27}, 
{name:"adama", age:23}, {name:"johnson", age:29}];

  const colum = [{Header:"name", accessor:"name"}, {Header:"age", accessor:"name"}];
return(
    <div>
        data = {data}
        colum = {colum}
        defaultPageSize = {2}
        pageSizeOptions = {[2,4,6]}
   </div>
);
 }

