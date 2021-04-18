import handleSubmit from './js/formHandler.js';
import { filter } from './js/helper.ts';

console.log("Hi, there")
console.log('Hi , '+filter('amer',['ahmed','abdelrahman','amer']));
if(handleSubmit)
    console.log("handle submit is defined.");
else
    console.log("handle submit is not defined.");
