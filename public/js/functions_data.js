import { formatToCurrency } from './fotmatToCurrency.js';
const main = document.getElementById('main');

export let data = [];

export async function getRandomUser(data) {
  //1 way
  // fetch('https://randomuser.me/api').then(res=>res.json()).then(data=>console.log(data))

  //2 way
  // const data = await fetch('https://randomuser.me/api')
  // const user = await data.json()

  // 3 way

  const res = await (await fetch('https://randomuser.me/api')).json();
  const user = res.results[0];
  const newUser = {
    name: `${user.name.first} ${user.name.last} `,
    money: Math.floor(Math.random() * 1000000),
  };
  addData(newUser);
}
let charset = 'pl-PL',
  style = 'currency',
  currency = 'PLN';
function addData(obj) {
  data.push(obj);
  updateDOM();
}

function updateDOM(providedData = data) {
  main.innerHTML = '<h2><strong>Person</strong>Wealth</h2>';

  providedData.forEach((item) => {
    const element = document.createElement('div');
    element.classList.add('person');
    element.innerHTML = `
          <strong>${item.name}</strong> ${formatToCurrency(
      item.money,
      charset,
      style,
      currency
    )}
                `;
    main.appendChild(element);
  });
}

export function doubleMoney() {
  //  data.map((item) => {
  //     (item.money = item?.money * 2) || 'Not a number';
  //     item.name = item.name;
  //   });
  data = data.map((item) => {
    return { ...item, money: item.money * 2 };
  });

  updateDOM();
}

let dir = 'asc';
export function sortPeople() {
  dir === 'desc' ? (dir = 'asc') : (dir = 'desc');
  dir === 'desc'
    ? (data = data.sort((a, b) => a.money - b.money))
    : (data = data.sort((a, b) => b.money - a.money));
  updateDOM();
}

export function showOnlyMillioners() {
  data = data.filter((item) => item.money > 1000000);
  updateDOM();
}

export function addAll() {
  console.log(data);
  let sum;
  sum = data.reduce((money, b) => money + b.money, 0);
  console.log(sum);
  const newDiv = document.createElement('div');
  newDiv.innerHTML = `
    <h2><strong>Total: </strong>${formatToCurrency(sum, charset, style, currency)}</h2>
  `;
  main.appendChild(newDiv);

  // updateDOM();
}
