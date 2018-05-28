import React from 'react';
import ReactDOM from 'react-dom';

// WRITING ELEMENT
 const tasks = [
     'Take out the trash',
     'Go to the skatepark',
     'Walk the dog'
 ]

 const people = [
     'Annie',
     'Isaac',
     'Kate'
 ]

const element = <ul>
{ people.map((person, index) => <li key = {index}> {person} </li>)}
 </ul>
// const element = React.createElement('ol' ,null,
//
// tasks.map((task, index) => React.createElement('li', {key: index}, task))
// );

// const element = <ol>
// { tasks.map((taks, index) => <li key = {index}> {taks} </li>)}
// </ol>
//
// const element = <ol>
// { tasks.map((task, index) => <li key = {index}> {task} </li> )}
// </ol>

ReactDOM.render(element, document.getElementById('root'));


// import React from 'react';
//
// const element = React.createElement('h1')

// const integers =[1,2,3];
//
// const updatedIntegers = integers.map(function(number){
//     return number+= 1
// });
//
// console.log(updatedIntegers);

// const integers = [552, 12, 98];
// const updatedIntegers = integers.map(function(multiplyBySix) {
//     return multiplyBySix*= 6
// });
// console.log(updatedIntegers);


// const integers = [552, 12, 98];
// const updatedIntegers = integers.map((multiplyBySix) => {
//     return multiplyBySix*= 6
// });
// console.log(updatedIntegers);


// const updatedIntegers = integers.map(multiplyBySix => multiplyBySix *= 6);
//
// console.log(updatedIntegers);



// const updatedIntegers = integers.map(multiply => multiply *= 1);
//
// console.log(updatedIntegers);


// const ages = [10, 26, 30];
// const adults = ages.filter(function(age) {
//     return age > 20;
// });





// const adults = ages.filter(age => age > 20);
// console.log(adults);

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
//
// const isaac = new Person('Isaac', 28);
// console.log(isaac);
//
// let numbers = [1,2,3];


////////////////////////////////////////////////////////
///////////////// ES6 CLASSES OPTIONAL /////////////////
////////////////////////////////////////////////////////

// class Person{
//
//     constructor(name, age, children, locations, currentLocation) {
//         this.name = name;
//         this.age = age;
//         this.children = children;
//         this.locations = locations;
//         this.currentLocation = currentLocation;
//     }
//     speak() {
//         console.log(`hi my name is ${this.name}, I have a daughter named ${this.children}, and I have lived in ${this.locations}, but currently reside in ${this.currentLocation}`);
//     }
//     birth(child) {
//         this.children.push(child);
//     }
//     city(location) {
//         this.locations.push(location);
//     }
//     currentLocation(current) {
//         this.currentLocation.push(current);
//     }
// };
//
// const isaac = new Person('Isaac', 28, 'Honor', ['California, Chicago, Denver'], 'Chicago');
// isaac.speak();
// isaac.birth();
// console.log(isaac.children);

// isaac.city();
// console.log(isaac.locations);

///////////////////////////////////////////////
//////////////// SPREAD OPERATOR///////////////
///////////////////////////////////////////////

// const names = ['John', 'Bill', 'Sam']
// const moreNames = ['William', 'Paul', 'Mike']

// this is the typical long way to write it in JS
// let allNames = []
// allNames = allNames.concat(names)
// allNames.push('Gio')
// allNames = allNames.concat(moreNames)
// console.log(allNames);



// ES6 SYNTAX USING THE "SPREAD OPETATOR (...)"

// const names = ['John', 'Bill', 'Sam']
// const moreNames = ['William', 'Paul', 'Mike']
//
// const allNames = [...names, 'Gio', ...moreNames];
// console.log(allNames);
