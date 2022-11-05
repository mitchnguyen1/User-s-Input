/*
  in this file, write your person class to be exported to your main.js file
  take care not to unintentionally change the name of the class or the export statement!!!
*/

//create class with first name, last name, and age
export default class Person {
  constructor(firstName, lastName, age){ //constructing with form's value 
      this.firstName = firstName;
      this.lastName = lastName;
      this.ageYr = age;
      }

}

