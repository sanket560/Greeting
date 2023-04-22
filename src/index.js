import React from 'react' // import react in index file
import ReactDOM from 'react-dom' // import reactdom 
import afternoonImg from "./Images/afternoon.jpg"
import morningImg from "./Images/morning.jpg"
import nightImg from "./Images/night.jpg"

import "./index.css";


// js conditions
let greeting = "";
let newimg  = ""
let currentDate = new Date();
let currentTime = currentDate.getHours();

if(currentTime >= 1 && currentTime < 12){
  greeting = "Good Moring"
  newimg = morningImg

}else if( currentTime >= 12 && currentTime < 19){
  greeting ="Good Afternoon"
  newimg = afternoonImg
}else{
  greeting ="Good Night"
  newimg = nightImg
}

// ReactDOM.render('kya dikhana hai', 'kaha dikhana hai','callback fun')
ReactDOM.render(
  <div>
    <h1>hello sir , <span>{greeting}</span></h1>
    <img src={newimg}/>
  </div>,
  document.getElementById('root')
)