let loginBox = document.querySelector(".login-box")
loginBox.addEventListener("mousemove",function(e){
    let rect  = loginBox.getBoundingClientRect()
    let centerX = rect.left + rect.width / 2
    let centerY = rect.top + rect.height / 2

    let mouseX  = e.clientX -centerX
    let mouseY = e.clientY - centerY

    let rotateX = (mouseY / rect.height) * 20
    let rotateY = (mouseX / rect.width) * 20
    loginBox.style.transform = `perspective(800px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`
})

loginBox.addEventListener("mouseleave", function(){
    loginBox.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg)"
})


let users = JSON.parse(localStorage.getItem("users"))
if(users === null){
    users = [
        {username:"john", password:"1234"},
        {username:"alice",password:"abcd"}
    ]
}

localStorage.setItem("users",JSON.stringify(users))
let registerBtn = document.getElementById("registerBtn")
let loginBtn = document.getElementById("loginBtn")
let message = document.getElementById("message")


loginBtn.addEventListener('click',function(){

    let userName = document.getElementById("username").value
    let passWord = document.getElementById("password").value

let foundUser = false

for(let i = 0;i<users.length;i++){
let user = users[i]

if(user.username === userName && user.password === passWord){
    localStorage.setItem("loggedInUser",userName)
    window.location.href = "store.html"
    foundUser = true
    }
}

if(foundUser === false){
    message.style.color = "#ff4444"
    message.innerText="Invalid username or password"
}

document.getElementById("username").value = ""
document.getElementById("password").value = ""

})

//Registration 
registerBtn.addEventListener('click',function(){
    let userName = document.getElementById("username").value
    let passWord = document.getElementById("password").value

    if(userName === "" || passWord === ""){
        message.style.color = "#ff4444"
        message.innerText = "Please fill all fields"
        return
    }

    let exists = false
    for(let i = 0;i<users.length;i++){
        let existingUser = users[i]
        if(existingUser.username === userName){
            exists = true
            break
        }
    }

    if(exists === true){
        message.style.color = "#ff4444"
        message.innerText = "Username already exists"
        return 
    }

    let newUser = {
        username: userName,
        password: passWord
    }

    users.push(newUser)
    localStorage.setItem("users",JSON.stringify(users))

    message.style.color = "#00cc66"
    message.innerText = "User registered successfully"
    document.getElementById("username").value = ""
    document.getElementById("password").value = ""
})