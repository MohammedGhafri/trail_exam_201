"use strict";

//////
function Car(type, days) {
    this.type = type;
    this.days = days;
    arrOfObject.push(this)
  }

let arrOfObject=[]



  function saveData(a,b){
let new_car = new Car(a,b)
localStorage.setItem('myCars',JSON.stringify(arrOfObject)); // this is local storage only

  }

/////
let form = document.getElementById('carForm')
let container = document.getElementById('container')
let table = document.createElement('table')
    container.appendChild(table)
let counter = 1

// console.log(form,container)
//Global for static stuff, local/inscope of function for dynamic stuff.


function displayData(event){
    event.preventDefault();
    // console.log(event.target.cars.value);
    let selValue = event.target.cars.value
    let dayValue = event.target.days.value

    saveData(selValue,dayValue);
    render(selValue,dayValue)
    var from_storage=JSON.parse(localStorage.getItem('myCars'));
    // console.log(from_storage)

    //With local storage
//     table.innerHTML=''
//     for(let i = 0;i<from_storage.length;i++){
// console.log(from_storage[i].type,from_storage[i].days)

//     render(from_storage[i].type,from_storage[i].days)

//     }
    


}
form.addEventListener("submit",displayData)


//a is type, b is no. of days
function render(a , b){
   
    
    let tr = document.createElement('tr')
    tr.setAttribute('id', `tr_tag${counter}`)

    table.appendChild(tr)

    // 1- Creation
    let td_type = document.createElement('td')
    let td_days = document.createElement('td')
    let td_price = document.createElement('td')
    let td_delete = document.createElement('td')
    td_delete.setAttribute('id', `del_tag${counter++}`)

    td_delete.addEventListener('click',function(event){
     
        this.parentElement.remove();

    })
    // tr.appendChild(td_type)
    // tr.appendChild(td_days)
    // tr.appendChild(td_price)

    // 2- Append
    tr.append(td_delete,td_type,td_days,td_price)
    // 3- Fill with values
    td_days.textContent = b;
    td_type.textContent=a;
    let rand_price = Math.floor(Math.random() * (150 - 25) ) + 25;
    td_price.textContent=b*rand_price;
    td_delete.textContent = 'X'
}

var from_storage=JSON.parse(localStorage.getItem('myCars'));
for(let i = 0;i<from_storage.length;i++){
        render(from_storage[i].type,from_storage[i].days)
        }