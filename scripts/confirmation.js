let loggedInUser = localStorage.getItem("loggedInUser")

let confirmDetails = document.getElementById("confirm-details")
let continueShoppingBtn = document.getElementById("continue-btn")
let orderNumber = "IRF" + Date.now();

function calculateDays(){
let today = new Date()
    today.setDate(today.getDate() + 5)
    return today
}

confirmDetails.innerHTML = `
<p>${orderNumber}</p>
<p>${loggedInUser}</p>
<p>${calculateDays().toDateString()}</p>
`

continueShoppingBtn.addEventListener("click",function(){
    window.location.href = "store.html"
})