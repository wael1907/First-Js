let getName = document.getElementById("getName")

getName.innerHTML = localStorage.userName.slice(0,1).toUpperCase() + localStorage.userName.slice(1)

function toApp() {
    location.assign("./App.html")
}
