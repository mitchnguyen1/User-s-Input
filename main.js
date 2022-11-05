import Person from "./Person.js";
/*
  Here you will write your the functionality for your webpage

  I have already written the import and export statements for the Person class, so once you have it written in the other file it should be available here
*/

//get form
const userInfoForm = document.getElementById("userInfoForm")


//select the input box to grab info from
const fName = document.getElementById('fName1');
const lName = document.getElementById('lName1');
const age = document.getElementById('age1');

//select text area for output
const userTextArea = document.getElementById('userTextArea');

//select reset button 
const resetBtn = document.getElementById('reset');


//post user's input inside of empty h1
function addUserInfo(){
//create a new class with user's info from the value 
  const person = new Person(fName.value, lName.value, age.value)
//add userinfo to text area using class constructor's key
    let answer = 'Hello! Your name is '+person.firstName+' '+person.lastName+'. Your age is '+person.ageYr+'.';
    userTextArea.innerHTML = answer;
    console.log(person)
// clear input area
    fName.value = '';
    lName.value = '';
    age.value = '';
    }


//make an event listener that watches for submit button and run 2 functions
userInfoForm.addEventListener('submit', addUserInfo)

//reset output area
function reset(){
//clears user text area
  userTextArea.innerHTML = '';
  //clear input area
  fName.value = '';
  lName.value = '';
  age.value = '';
}

//listen for reset click and call clearOutput
resetBtn.onclick = reset;
