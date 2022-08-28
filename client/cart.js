let btn = document.querySelector('#cart')
const cartList = document.querySelector('#cartList')

const URL = 'http://localhost:4000'

function getTable() {
    cartList.innerHTML = ''
    axios.get(`${URL}/cart`)
        .then(res => {
            res.data.forEach(elem => {
                let cartCard = `<div class="cart-card">
                    <h2>${elem.product}</h2>
                    <h3>Price: ${elem.price}</h3>
                    <h4>Quantity: ${elem.quantity}<h4>
                    </div>
                `
                cartList.innerHTML += cartCard
            })
        })
}

btn.addEventListener('click', getTable)