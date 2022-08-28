let btn = document.querySelector('#cart')
const cartList = document.querySelector('#cartList')
const price = document.querySelector('#price')

const URL = 'http://localhost:4000'

function getTable() {
    cartList.innerHTML = ''
    price.innerHTML = ''
    axios.get(`${URL}/cart`)
        .then(res => {
            let total = 0;
            res.data.forEach(elem => {
                
                let cartCard = `<div class="cart-card">
                    <h2>${elem.product}</h2>
                    <h3>Price: ${elem.price}</h3>
                    <h4>Quantity: ${elem.quantity}<h4>
                    </div>
                `
                cartList.innerHTML += cartCard
                total += (elem.price * elem.quantity)
            })
            let totalCard = `<div id="totalCard">
            <h1>Total Price ${total}</h1>
            </div>`
            price.innerHTML = totalCard
        })
}

btn.addEventListener('click', getTable)
