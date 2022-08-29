const cartList = document.querySelector('#cartList')
const price = document.querySelector('#price')

const URL = 'http://localhost:4000'

function updateProduct(id, type){axios.put(`${URL}/cart/${id}`, {type}).then(() => {console.log("hit")
    getTable()})}

function deleteProduct(id){axios.delete(`${URL}/cart/${id}`).then(getTable())}

function getTable() {
    console.log("hit")
    cartList.innerHTML = ''
    price.innerHTML = ''
    axios.get(`${URL}/cart`)
        .then(res => {
            let total = 0;
            res.data.forEach(elem => {
                let cartCard = `<div class="cart-card">
                    <h2>${elem.productid}</h2>
                    <h3>Price: ${elem.price}</h3>
                    <h3>Quantity: ${elem.quantity}<h3>
                    <div>
                    <button onclick="updateProduct('${elem.productid}', 'plus')" class = 'adjust'>+</button>
                    <button onclick="updateProduct('${elem.productid}', 'minus')" class = 'adjust'>-</button>
                    </div>
                    <div>
                    <button onclick="deleteProduct(${elem.productid})" class = 'delete'>delete</button>
                    </div>
                    </div>`
                cartList.innerHTML += cartCard
                total += (elem.price * elem.quantity)
                console.log("hit")
            })
            total = total.toFixed(2)
            let totalCard = `<div id="totalCard">
            <h1>Total Price ${total}</h1>
            </div>`
            price.innerHTML = totalCard
        })
}

getTable()

