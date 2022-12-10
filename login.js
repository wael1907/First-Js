let user = document.getElementById("user")
let pass = document.getElementById("pass")
let eye = document.getElementById("eye")
let login = document.getElementById("login");



login.addEventListener("click", function (e) {
    if (user.value.trim().length == 0 || pass.value.length == 0) {
        e.preventDefault()
    } else {
        localStorage.userName = user.value
        location.assign("./welcome.html")
        user.value = ""
        pass.value = ""
    }

})


eye.addEventListener("click", function () {
        if (pass.type === "password") {
        pass.type = "text"
        eye.className = "fa-solid fa-eye-slash field-icon"
    } 
      else {
        pass.type = "password"
        eye.className = "fa-solid fa-eye field-icon"
    }

})

user.onblur = function () {
    if (user.value.trim().length == 0) {
        user.style.cssText = "border-color:red !important"
    } else {
        user.style.cssText = "border-color:green !important"

    }
}
pass.onblur = function () {
    if (pass.value.trim().length == 0) {
        pass.style.cssText = "border-color:red !important"
    } else {
        pass.style.cssText = "border-color:green !important"

    }
}