let products = [{
    id: 1,
    name: "Adjustable Dumbbells",
    price: 4999,
    category: "weights",
    image: "🏋️",
    description: "Adjustable weight from 5kg to 30kg",
    inStock: true
},
{
    id: 2,
    name: "Resistance Band Set",
    price: 1499,
    category: "weights",
    image: "💪",  
    description: "Includes 5 resistance levels",
    inStock: true

},
{
    id: 3,
    name: "Pull Up Bar",
    price: 2999,
    category: "body weights",
    image: "🏋️", 
    description: "Fits most door frames, no screws needed",
    inStock: true
},
{
    id: 4,
    name: " Yoga Mat",
    price: 899,
    category: "body weight",
    image: "🏋️",
    description: "Non slip, extra thick 6mm mat",
    inStock: true
}]


let loggedInUser = localStorage.getItem("loggedInUser")
let cart = JSON.parse(localStorage.getItem(`cart_${loggedInUser}`)) || []

document.getElementById("welcome-user").innerText = `Welcome, ${loggedInUser}`

let cartCount = document.getElementById("cart-count")

function updateCartCount(){
    cartCount.innerText = cart.length
}


const productsGrid = document.querySelector(".products-grid")

function renderProducts(){
    for(let i=0;i<products.length;i++){
    let productCard = document.createElement("div")
    productCard.classList.add("product-card")

    productCard.innerHTML =`
    <div class="product-image">
    ${products[i].image}
    </div>
    <h3>${products[i].name}</h3>
    <p class="product-price">Ksh ${products[i].price}</p>
    <p class="product-desc">${products[i].description}</p>
    <button class="add-to-cart">Add to Cart</button>
    `
    let addToCartBtn = productCard.querySelector(".add-to-cart")

    addToCartBtn.addEventListener("click",function(){
        let found = false
        for(let j=0;j<cart.length;j++){
            if(cart[j].id === products[i].id){
                cart[j].quantity++
                found = true
            }
        }
        if(found ===false){
                cart.push({...products[i],quantity:1})
            }
        let loggedInUser = localStorage.getItem("loggedInUser")
        localStorage.setItem(`cart_${loggedInUser}`, JSON.stringify(cart))
        updateCartCount()
    })
    productsGrid.appendChild(productCard);
    }
}
updateCartCount()
renderProducts()

