let loggedInUser = localStorage.getItem("loggedInUser")
let cart = JSON.parse(localStorage.getItem(`cart_${loggedInUser}`)) || []

if(cart.length === 0){
    window.location.href = "index.html"
}

let summaryItems = document.getElementById("summary-items")
let summaryTotal = document.getElementById("summary-total")
let deliveryDate = document.getElementById("delivery-date")
let placeOrderBtn = document.getElementById("place-order")
let fullName = document.getElementById("full-name")
let address = document.getElementById("address")
let phone = document.getElementById("phone")
let error = document.getElementById("error")


function renderSummary(){
    summaryItems.innerHTML = ""

    for(let i = 0;i<cart.length;i++){
        let item = document.createElement("div")

        item.innerHTML = `

        <span>
        ${cart[i].image}
        ${cart[i].name}</span>
        <span>:
         ${cart[i].quantity}
         </span>
        `
        summaryItems.appendChild(item)
    }
}   

function calculateDelivery(){
    let today = new Date()
    today.setDate(today.getDate() + 5)
    
    deliveryDate.innerText = `Estimated Delivery: ${today.toDateString()}`
}

function calculateTotal(){
    let total = 0
    for(let i = 0;i<cart.length;i++){
        total+=cart[i].price * cart[i].quantity

    }
     summaryTotal.innerHTML = `Total: Ksh ${total}`
}

placeOrderBtn.addEventListener("click",function(){
    if(fullName.value === "" || address.value === "" || phone.value === ""){
        error.innerHTML = "Please fill in all fields"

        return
    }else{
        localStorage.removeItem(`cart_${loggedInUser}`)
        alert("Order Placed Successfully")
        cart = []
        renderSummary()
        calculateTotal()

fullName.value = ""
address.value = ""
phone.value = ""
error.innerHTML = ""
    }
})

calculateTotal()
renderSummary()
calculateDelivery()