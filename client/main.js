const btn1 = document.querySelector('#prod1')
const btn2 = document.querySelector('#prod2')
const btn3 = document.querySelector('#prod3')
const btn4 = document.querySelector('#prod4')
const btn5 = document.querySelector('#prod5')
const btn6 = document.querySelector('#prod6')

const URL = 'http://localhost:4000'

function add1(evt){
    evt.preventDefault();
    Swal.fire({
        toast: true,
        icon: 'success',
        title: 'added!',
        animation: false,
        position: 'bottom',
        showConfirmButton: false,
        timer: 700,
      });
    axios.get(`${URL}/add1`)
    .then(res => console.log(res.data))}
    
function add2(evt){
    evt.preventDefault();
    Swal.fire({
        toast: true,
        icon: 'success',
        title: 'added!',
        animation: false,
        position: 'bottom',
        showConfirmButton: false,
        timer: 700,
      });
    axios.get(`${URL}/add2`)
    .then(res => console.log(res.data))}

function add3(evt){
    evt.preventDefault();
    Swal.fire({
        toast: true,
        icon: 'success',
        title: 'added!',
        animation: false,
        position: 'bottom',
        showConfirmButton: false,
        timer: 700,
      });
    axios.get(`${URL}/add3`)
    .then(res => console.log(res.data))}

function add4(evt){
    evt.preventDefault();
    Swal.fire({
        toast: true,
        icon: 'success',
        title: 'added!',
        animation: false,
        position: 'bottom',
        showConfirmButton: false,
        timer: 700,
      });
    axios.get(`${URL}/add4`)
    .then(res => console.log(res.data))}

function add5(evt){
    evt.preventDefault();
    Swal.fire({
        toast: true,
        icon: 'success',
        title: 'added!',
        animation: false,
        position: 'bottom',
        showConfirmButton: false,
        timer: 700,
      });
    axios.get(`${URL}/add5`)
    .then(res => console.log(res.data))}
    
function add6(evt){
    evt.preventDefault();
    Swal.fire({
        toast: true,
        icon: 'success',
        title: 'added!',
        animation: false,
        position: 'bottom',
        showConfirmButton: false,
        timer: 700,
      });
    axios.get(`${URL}/add6`)
    .then(res => console.log(res.data))}

btn1.addEventListener('click', add1)
btn2.addEventListener('click', add2)
btn3.addEventListener('click', add3)
btn4.addEventListener('click', add4)
btn5.addEventListener('click', add5)
btn6.addEventListener('click', add6)
