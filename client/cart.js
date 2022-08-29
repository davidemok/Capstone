let btn = document.querySelector('#cart')
const cartList = document.querySelector('#cartList')
const price = document.querySelector('#price')

const URL = 'http://localhost:4000'

function getTable(evt) {
    evt.preventDefault()
    cartList.innerHTML = ''
    price.innerHTML = ''
    axios.get(`${URL}/cart`)
        .then(res => {
            let total = 0;
            res.data.forEach(elem => {
                
                let cartCard = `<div class="cart-card">
                    <h2>${elem.product}</h2>
                    <h3>Price: ${elem.price}</h3>
                    <h3>Quantity: ${elem.quantity}<h3>
                    <button onclick="updateProduct(${elem.product}, 'plus'" class = 'adjust'>+</button>
                    <button onclick="updateProduct(${elem.product}, 'minus'" class = 'adjust'>-</button>
                    <button onclick="deleteProduct(${elem.product}" class = 'delete'>delete</button>
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

function updateProduct(id, type){
    axios.put(`${URL}/${id}`, {type}).then(getTable())
}

function deleteProduct(id){
    axios.delete(`${URL}/${id}`).then(getTable())
}

btn.addEventListener('click', getTable)
