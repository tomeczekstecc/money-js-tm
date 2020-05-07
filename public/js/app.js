import {getRandomUser, data, doubleMoney, sortPeople, showOnlyMillioners, addAll} from './functions_data.js'


const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionersBtn = document.getElementById('show-millioners');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

getRandomUser(data);
getRandomUser(data);
getRandomUser(data);

addUserBtn.addEventListener('click', getRandomUser)
doubleBtn.addEventListener('click', doubleMoney)
sortBtn.addEventListener('click', sortPeople)
showMillionersBtn.addEventListener('click', showOnlyMillioners)
calculateWealthBtn.addEventListener('click', addAll);


console.log(data);
