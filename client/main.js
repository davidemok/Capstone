const btn1 = document.querySelector('#prod1')
const btn2 = document.querySelector('#prod2')
const btn3 = document.querySelector('#prod3')
const btn4 = document.querySelector('#prod4')
const btn5 = document.querySelector('#prod5')
const btn6 = document.querySelector('#prod6')

let count1=0;
let count2=0;
let count3=0;
let count4=0;
let count5=0;
let count6=0;

const URL = 'http://localhost:4000'

function add1(evt){
    evt.preventDefault();
    if(count1 === 0){
    console.log("added product 1 to shopping cart")
    count1=1;
    axios.get(`${URL}/add1`)}
    else{axios.put(`${URL}/plus1`)}
    
}
function add2(evt){
    evt.preventDefault();
    if(count2===0){
    console.log("added product 2 to shopping cart")
    axios.get(`${URL}/add2`)}
    else{axios.put(`${URL}/plus2`)}
    count2=1;
}
function add3(evt){
    evt.preventDefault();
    if(count3===0){
    console.log("added product 3 to shopping cart")
    axios.get(`${URL}/add3`)}
    else{axios.put(`${URL}/plus3`)}
    count3=1;
}
function add4(evt){
    evt.preventDefault();
    if(count4===0){
    console.log("added product 4 to shopping cart")
    axios.get(`${URL}/add4`)}
    else{axios.put(`${URL}/plus4`)}
    count4=1;
}
function add5(evt){
    evt.preventDefault();
    if(count5===0){
    console.log("added product 5 to shopping cart")
    axios.get(`${URL}/add5`)}
    else{axios.put(`${URL}/plus5`)}
    count5=1;
}
function add6(evt){
    evt.preventDefault();
    if(count6===0){
    console.log("added product 6 to shopping cart")
    axios.get(`${URL}/add6`)}
    else{axios.put(`${URL}/plus6`)}
    count6=1;
}

btn1.addEventListener('click', add1)
btn2.addEventListener('click', add2)
btn3.addEventListener('click', add3)
btn4.addEventListener('click', add4)
btn5.addEventListener('click', add5)
btn6.addEventListener('click', add6)
