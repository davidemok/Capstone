const cartList = document.querySelector('#cartList')
const price = document.querySelector('#price')

const URL = 'http://localhost:4000'

const fetchCart = async() => {
    const response =  await axios.get(`${URL}/cart`)
    return response.data
}
function updateProduct(id, type){axios.put(`${URL}/cart/${id}`, {type}).then(getTable())}

function deleteProduct(id){axios.delete(`${URL}/cart/${id}`).then(getTable())}

const getTable = async() => {
    cartList.innerHTML = ''
    price.innerHTML = ''
    const cart = await fetchCart()
    let total = 0;
    cart.forEach(elem => {
        let img=1
                if(elem.productid===1){
                    img = './images/shawl.png'
                }else if(elem.productid===2){
                    img = './images/bag.png'
                }
                else if(elem.productid===3){
                    img = './images/quilt.png'
                }
                else if(elem.productid===4){
                    img = './images/cardigan.png'
                }
                else if(elem.productid===5){
                    img = './images/bustier.png'
                }
                else if(elem.productid===6){
                    img = './images/pochette.png'
                }
                let cartCard = `<div class="cart-card">
                    <h2>${elem.productname}</h2>
                    <img class = "cart_img" src=${img} alt="product">
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
            })
            total = total.toFixed(2)
            let totalCard = `<div id="totalCard">
            <h1>Total Price ${total}</h1>
            </div>`
            price.innerHTML = totalCard
        }

getTable()

