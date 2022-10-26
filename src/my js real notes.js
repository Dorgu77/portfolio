//callbacks---a callback function is a function which
//is passed as a argument to another funtion
//method1

function abi(amount) {

    let num = 90 + amount;
    return num;
}

function showMe(dig) {


    let answer = dig - 2;

    let last = abi(answer);
    return last;
}
console.log(showMe(5));


//callback method2

function callbak(het) {
    let nas = het - 8;

    return nas;
}

function main(call, bin) {

    let obe = bin + 6;
    let put = call(obe);
    console.log(put);

}
main(callbak, 9);


//error handling--try method test a given code block
//for errors and stops its execution.
//throw method creates a custum error message 
//catch displays the error js error oject message or custm
//thrown messaage
//finally executes he code in its block whether there is 
//an error or not
try {
    let age = 46;
    if (age !== 78) {
        throw "big wahala dey o";
    }
    console.log("u are old");
} catch (error) {

    console.log(error);
} finally {
    console.log("promlem no dey finish");
}

//closures--   creating a function inside another fuction
//which gains acess to the higher scope..this helps to 
//achieve encapsulation//method

function showMe(dig) {

    let answer = dig - 2;

    let last = abi(answer);
    return last;

    function abi(amount) {
        let num = 90 + amount;
        console.log(num);

    }
}
showMe(7);

//objects creation
let ada = {
    joy: "happines",
    ebi: "fuck",
    "rating ca": 78

};
console.log(ada.ebi);
console.log(ada["joy"]);
console.log(ada["rating ca"]);

//objct operations
ada.age = "old";
console.log(ada.age);
delete ada.joy;
console.log(ada["joy"]);

//checking object property  
console.log("ebi" in ada);

//iteration loop
for (let key in ada) {
    console.log(ada[key]);
};
//object methods and the this word
let mar = {
    fat: "oop",
    asa: function() {
        console.log("hello" + " " +
            this.fat);
    }
};
mar.asa();


//creating object by instance
//let objectname=new Object;
let cat = new Object();
cat.height = 34,
    cat.size = 48,
    cat.gift = "music";
console.log(cat.gift);

//creating object by constructor function
//objentname=new functionname();

function bab(age, level) {

    this.age = age;
    this.level = level;
}
viki = new bab(34, 300);
console.log(viki.age + " " +
    viki.level);

//arrays```an array is an ordered list of values.

//array creation by array literal notaion

//var arrayname=[];

var array = [34, "weed", 89, "teeth"];

//array creation by array constructor 
//var arrayname = newArray();
var man = new Array(78, 90, "you");

//basic array method

//array.push();---adds an element to the end of the array

//array.pop();---remove the last element of the array

//array.shift();---removes the first elementof the array

//array.unshift();----adds an element to then begininig of an array 

//array iteration using the for loop
var jay = [34, 77, 89];
var baf = [];
for (var i = 0; i < jay.length; i++) {

    var ans = (jay[i] / 2);
    baf.push(ans);

    console.log(baf);
}

//looping multi dimensional arrays
var jay = [
    [34, 65],
    [77, 9],
    [89, 9]
];

var baf = [];
for (var i = 0; i < jay.length; i++) {
    var hmm = jay[i].length;

    for (var j = 0; j < hmm; j++) {
        var ans = (jay[i][j] / 2);
        baf.push(ans);

        console.log(baf);
    }
}


//modifying array values
jay[2] = 100;
console.log(jay);
//modifying array length 
jay.length = 2;
console.log(jay);

//array methods 
//map method ..this iterates over all the array items and performs
//a given task on them using a call back funtion
//arrayname.map(callback funtion);

var opo = [2, 5, 6];

function more(bal) {

    var show = bal + 12;
    console.log(show);
}
var answer = opo.map(more);
console.log(answer);

//reduce method...
//this reduces the array to a single value by performing

//a task on them using a call back function

//arrayname.reduce(callback function);

function xxx(accum, cur) {
    return accum + cur;

}
var pro = opo.reduce(xxx);
console.log(pro);

//filter method..this gives out the array items which
//satisfy a  given condition using a call back function  

let prin = function(co) {
    return co > 5;
}
console.log(opo.filter(prin));


//sort method..this arranges an array in assending or decending
//order using a call back funtion
//this example sorts an array in accending order and returns
//the highest value

function sot(a, b) {
    return a - b;
}
console.log(opo.sort(sot));
console.log(opo[2]);

//the reverse method,,this reverses an array
//arrayname,reverse();
opo.reverse();
console.log(opo);

//the splice method
var loo = [2, 80, 10];
//adding new element without removing old ones
loo.splice(2, 0, "fuck u");
console.log(loo);

//delleting 3 elements starting fom index 0
loo.splice(0, 2);
console.log(loo);

//removing an element and replacing it
loo.splice(1, 1, "oboy");
console.log(loo);

var loo = [3, 60, 34];
// the slice method
//copy all elements
var fro = loo.slice();
console.log(fro);
//copy two elements starting from index 0
var ara = loo.slice(0, 2);
console.log(ara);

//the concat method...this merges two array together to get a
//new one...
//arrayname.concat();
//the join method,,thisjoins theelements of an array 
//and turns them into a string
//arrayname.join();

//the every method...this checks if all array elements
//satify agiven condition and returns trueor 
var res = loo.every(function(e) {
    return e > 0;
});
console.log(res);
//the indexof method..this searches the index ofa given
//element in an array
console.log(loo.indexOf(80)); //functions..these are reusable pieces of code
function ass(a, num) {
    return a + num;
}
console.log(ass(6, 87));



//anonymous functions...are functions that hasno name
//during declaration the variable is being called at execution
//instead
var fok = function() {
    console.log("life is good");
}
fok();
//imidiately invoked functions...these are functions
//which are called imidiately they are being declared

(function() {
    console.log("loop");
})();

//arrow function...

// var add=(h,p)=>{

//code block
//   };
//when the code block is a single statmnt , the curly brace is 
//ignord   letadd=(h, p) => h + p;
var add = (h, p) => 7 + 9;
console.log(add); //asynchronous functions...these arefunctions which are executed
//in the back ground in order to avoid the normal program flow



//the settimeout method...setTimeout(callback function,delay);
function got() {
    console.log("oboi you tight");
}
var taa = setTimeout(got, 3000);

//or this seccond approach must use an arrow or annymous 
//function

//the annonymous function approach..
var timer = setTimeout(function() {
    console.log("oboi you tight");
}, 3000);

//the arrow function apprach
var cas = setTimeout(() => {
        let bab = 56;
        console.log(bab);
    },
    2000);


//the clearTimeout function..this cancels the initial
//settimout function that was executed by using a function
//to activate the clearTimeout function
//
//function cancel() {
//clearTimeout(timer);
//}
//the setinterval function...this executes a given
//function at every time interval 
//setTimeinterval(callback function,delay);
function iti() {
    var x = 10;
    x += 5;
    console.log(x);
}
setInterval(iti, 3000);

//the clearinterval function..this stops the execution
//thesetTimer function by using a function to call the
//clearinterval function

//function cancel() {
//clearinterval(timer);
//}

//number methods
//isNAN();this checks a value if its a number or not and returns a boolean true or false 

var cas = isNaN(45);
console.log(cas);

//the parseint(); method..this takes a string value a returns
//it as an integer 
var pos = parseInt("45");
console.log(pos);

//the tofixed(); method..this returns a value based
//on the specified decimal places
var zas = (45.88979).toFixed(2);
console.log(zas);

//the tostring(); method..this takes an integer value and
//returns it asa string value.
var bos = (45).toString();
console.log(bos);

//the Number.isInteger(); method...this cheks ifa given value
//is an integer and returns a boolean true or false
var kod = Number.isInteger(34.6);
console.log(kod);
//the number object...

//strings.
//strings methods
var str = "welcome";

//the substr(); method.. this extracts a given section of a 
//string starting from the beginning..
var gas = str.substring(0, 3);
console.log(gas);

//the toUpperCase(); method..this transforms a string 
//to uppercase
var das = str.toUpperCase();
console.log(das);

//the dot lenght property....this returns   given 
//string 
var kas = str.length;
console.log(kas);

//the backet notation...this is used to access
//indiviual characters only in a given string

//note the bracket nottation does not display substrings
//from the middle at any point of the string..,,to do that
//u meed convert the string to an array using the string split
//method and then apply the array slice(); method.. 
console.log(str[4]);

//the concat(); method....this joins a new string to an
//an already existing string
var the = str.concat(" ", " home");
console.log(the);

//the indexof(); method ..this returns the index of a 
//given characater or substring in a string.. 
var grt = "  who goes there  ";
var fot = grt.indexOf("go");
console.log(fot);
//the trimStart();and trimEnd(); methods..this is used to
//remove white spaces in the starting  and endining of a
//string..
var has = grt.trimStart();
console.log(has);

//the split(); method..this splits the string into an array 
//of seperate words 

//displaying the whole string as array
var nof = "oboy u sef bad ooo but";
var mag = nof.split();
console.log(mag);

//spliting and display only a substring of the given 
//string as an array
var maz = nof.split(" ", 2);
console.log(maz);

//the slice(); method..this extracts  a substring from
//a given string starting from any point and proceeds to the
//the end

//note omitting the last index , displays the rest of
//the string to the end

var xad = "go to hell bicth";
var mil = xad.slice(2, );
console.log(mil);

//the includes(); method..this checks if a string is found
//in another string and returns a boolean true or false..
var top = "we justn dey joke";
console.log(top.includes("dey"));

//regular expression..
//this is a string that describes as tring partern
//creating regular expreession..
//let re=/hi/;

//the constructor method of creating regular expression
//let re=new RegExp(hi);

//the global tag is used to search a string in the global
//scope
//the i tag this stands for ignore, it ignores case sensivity

//the test mehtod(),..this test if a string is found in a regular
//exprression and returns a boolean true or false..
let re = /we/gi;
let tes = re.test("we don");
console.log(tes);

//the search(); method..this searches a stringfor the match of
//of aregular expression and returns the index of
//the first match found in the string..
let lop = "let me mind my business";
let ares = lop.search(/me/gi);
console.log(ares);

//example 2..the cod below returns the index of the first
//appearance of a capital letter..
let ut = "we Are bad";
let de = /[A-Z]/;
let giv = ut.search(de);
console.log(giv);

//the match(); method..this matches a string with a regular 
//expression and returns an array of the match elements..
let cit = "price:$5-$10";
let nav = (/\$\d+/g);
let app = cit.match(nav);
console.log(app); //the replace(); method..
//this replace every occuerence of a match in a string using
//regulsr expression..
let sef = "we dey go play for play ground on play day";
let ast = sef.replace(/play/g,
    "yard");
console.log(ast);
//the approach of using a replacement function

//sets..these are characters in thesquare bracket which matches any substring
//in a given string...
let boi = "dor u for am tor jor";
let ax = boi.match(/[dftj]or/g);
console.log(ax);
//ranges..


//javascript Events..these are actions that takes place
//in a coding system..
//the onclick event..thistakes action when something is
//clicked
//example

//<button id ="cli" onclick="fun()"> click me </button>
//let fun=funtion(){  
//  var add="we dey here";
//alert(add);
//}
//The addEventListener(); method...
//This is a method which sets up callback listener function which triggers
//when an event occurs..
//element.addEventListener(eventtype, listenerfunction)

//the change event..this triggers when there is a change in
//in an input field, radio orcheck box..
//example
//<label> choose a city
//<select id="city" name="city">
//<option value="mexico"> mexico </option>
//<option value="america"> america </option>
//<option value="france"> france</option>
//</select>
//</label>
//<p>you seleted:<span id="demo"></span></p>
//var select=dIocument.getElementbyd("city");

//var fun =function(){
//var val=dIocument.getElementbyd("city").value;
//document.getElementbyd("demo").innerHTML=val;
//}
//select.addEventListener("change", fun);

// the math object...

// the ceil(); method..
//this rounds up a number to its nearest whole number

var num1 = Math.ceil(.90);
var num2 = Math.ceil(1.70);
var num3 = Math.ceil(21.60);
console.log(num1, num, num3);

// the floor(); method...
//this rounds down a number to
//its nearest whole number..

// the round(); method ...this 
//rounds a number to the nearest
//whole number

var num1 = Math.round(1.10);
var num2 = Math.round(1.70);
var num3 = Math.round(21.50);
var num4 = Math.round(-7.34);
console.log(num1, num2, num3, num4);

//the sqrt(); method..
//this return the square root of a given number

var num1 = Math.sqrt(4);
var num2 = Math.sqrt(100);
var num3 = Math.sqrt(3.21);
var num4 = Math.sqrt(-9);
console.log(num1, num2, num, num4);

//the cbrt();.. method
//this return the cube root of 
// a number..
var num1 = Math.cbrt(8);
var num2 = Math.cbrt(100);
var num3 = Math.cbrt(3.21);
var num4 = Math.cbrt(-27);
console.log(num1, num2, num3, num4);

//the absolute(); method..
//this return the absolute value of a given number

var num1 = Math.abs(5);
var num2 = Math.abs(-5);
var num3 = Math.abs(3.21);
var num4 = Math.abs(-3.21);
console.log(num1, num2, num3, num4);

//the max(); method..
// this return the maximum number of a given series of numbers

var num1 = Math.max(1, 2, 3);
var num2 = Math.max(-1, -2, -3);
console.log(num1, num2);


//the min(); method ..
//this return the minimum number of a given series of numbers.

var num1 = Math.min(1, 2, 3);
var num2 = Math.min(-1, -2, -3);
console.log(num1, num2);


// the pow(); method..
// this return the power of two given numbers..

var dat = math.pow(2, 3);
console.log(dat);


// JavaScript promises..
//these are used to replace callback functions in dealing with asychronous functions in ES6 ..


const  myPromise  =  new  Promise((resolve,  reject)  =>  {    
    let  condition = 9;    
    if (condition < 0)  {             resolve("Promise is resolved successfully and then() menthod will be called");       } 
    else  {              reject("Promise is rejected and catch() medhod will be called");       }  
});     
myPromise.then((message)  =>  {     
    console.log(message);  
}).catch((message)  =>  {     
    console.log(message); 
});  



//Ajax ..this stands for asynchronous JavaScript and Xml
// this is used to send and receive data information from the back end server side..


//XMLHttp request methods..

// open(); this initialize a request
//by using a GET or POST method
//send(); this sends the request
//abort(); this aborts a request which has already been sent
//getAllResponseheader();. this return all the response header
//getResponseheader(); this return the string of a particular string
//setRequestheader(); this set the value of an Http request


// http Request properties

//onreadystatechange..this is an event handler hich sets up a function 
//wen ever there is a state property change

//readystate..this returns the status of the request
// (request.readystate === 4) means request was receved
// (request.readystate === 2) means send() was cancelled
// (request.readystate === 3) means  request is loading/downloading
// (request.readystate === 1) means open() method was cancelled
// (request.readystate === 0) means client has created/unsent reques


//status..this returns the htp respone code from the revic
//(request.status === 200 ) means request was successful
//(request.status === 404 ) means  page not found
//(request.status === 500 ) means server error



// statusText .. this retuns the http response string from the server

//responsetext..


//responsetype...this returns a value that defines the response type 

//responeXML  ths rturns the response XML rom the server




//getting request from a server..

var httpRequest = new XMLHttpRequest();

function sendGetRequest() {
    httpRequest.onreadystatechange = writeContent;

    httpRequest.open("GET", "https://codeliber.com/test-server.php");
    httpRequest.send();
}

function writeContent() {
    if (httpRequest.readyState === 4) {
        if (httpRequest.status == 200) {
            document.getElementById("demo").innerHTML =
                httpRequest.responseText;
        } else {
            alert('There was a problem with the request.');
        }
    }
}




//posting a request to a server

var httpRequest = new XMLHttpRequest();

function sendPostRequest() {
    httpRequest.onreadystatechange = writeContent;

    httpRequest.open("POST", "https://codeliber.com/test-server.php");
    httpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    httpRequest.send("firstName=John&lastName=Doe");
}

function writeContent() {
    if (httpRequest.readyState === 4) {
        if (httpRequest.status == 200) {
            document.getElementById("demo").innerHTML =
                httpRequest.responseText;
        } else {
            alert('There was a problem with the request.');
        }
    }
}





var httpRequest = new XMLHttpRequest();

function sendGetRequest() {
    httpRequest.onreadystatechange = writeContent;

    httpRequest.open('GET', 'https://codeliber.com/test-server.php');
    httpRequest.send();
}

function writeContent() {
    if (httpRequest.readyState === 4) {
        if (httpRequest.status == 200) {
            var response = httpRequest.responseText;
            document.getElementById("demo").innerHTML = response;
        } else {
            alert('There was a problem with the request.');
        }
    } else {
        // response not ready yet
    }
}
}
}
}
}