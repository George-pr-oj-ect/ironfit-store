let loggedInUser = localStorage.getItem("loggedInUser")
let cart = JSON.parse(localStorage.getItem(`cart_${loggedInUser}`)) || []

let cartList = document.querySelector(".cart-items")
let cartTotal = document.getElementById("cart-total")
let checkoutBtn = document.getElementById("checkout-btn")

function renderCart(){
    cartList.innerHTML = ""
    for(let i=0;i<cart.length;i++){
       let cartItem=document.createElement("div")
       cartItem.classList.add("cart-item") 

       cartItem.innerHTML = `
       <span class="cart-image">${cart[i].image}</span>
       <p class="cart-name">${cart[i].name}</p>
       <p class= "cart-quantity">${cart[i].quantity}</p>
       <p class="cart-price">Ksh:${cart[i].price}</p>  
       <button class="remove-btn">Remove</button>
       `
       let removeBtn = cartItem.querySelector(".remove-btn")

       removeBtn.addEventListener("click",function(){
            cart.splice(i,1)
           let loggedInUser = localStorage.getItem("loggedInUser")
            localStorage.setItem(`cart_${loggedInUser}`, JSON.stringify(cart))
            renderCart()

       })
       cartList.appendChild(cartItem)
     
    }
    calculateTotal()
}

function calculateTotal(){
    let total = 0
    for (let i = 0;i<cart.length;i++){
        total += cart[i].price * cart[i].quantity

    }
    cartTotal.innerHTML =`Total: Ksh ${total}`
}

checkoutBtn.addEventListener("click",function(){
    window.location.href = "checkout.html"
})

renderCart()
