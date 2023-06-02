import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var greeting='';
//var currTime= new Date().toLocaleTimeString();
const currTime = new Date().getHours();
var cssColor='';
if(currTime>=1 && currTime<12)
{
  greeting='Good Morning';
  cssColor='Blue';
}
else if(currTime>=12 && currTime<19)
{
  greeting='Good Evening';
  cssColor='Yellow';
}

else{
  greeting='Good Night';
  cssColor='Black';
}

const changingColor={
  color:cssColor
} 

ReactDOM.render(
  <>
  <div id="div1"><h1>Hello Sir/Madam ,<span style={changingColor}>{greeting}</span></h1></div>
   

  </>,
  document.getElementById('root')

);

