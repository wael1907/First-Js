/////////////////  Choosing  //////////////////////////////////////



let sandwiches = document.querySelectorAll(".style-sp");
let sandwichesName = document.querySelectorAll(".style-sp h3");
let sandwichName = document.querySelectorAll("sandwich-name");
let previewedImg = document.getElementById("previewed-img");
let smSndch = document.querySelectorAll(".sm-sndch");





for (i=0;i<sandwiches.length;i++) {
    sandwiches[i].onclick = function (e) {
        sandwiches.forEach(function (sandwich) {
            sandwich.classList.remove("active-sp")
        })
        e.currentTarget.classList.add("active-sp")
        
        
       // Code preview Here
       for (i=0;i<smSndch.length;i++) {
        smSndch[i].onclick = function (e) {
            smSndch.forEach(function () {
                window.localStorage.setItem("src",e.currentTarget.src)
            })
            previewedImg.src = window.localStorage.getItem("src");
            // sandwichName.innerHTML = window.localStorage.getItem("sandwichName")
        }
    }
    




        }
}
/////////////////  Scrolling  //////////////////////////////////////

let items = document.querySelector(".items");
let left = document.querySelector(".left button");
let right = document.querySelector(".right button");

left.addEventListener("click" ,function () {
    items.scrollBy({
        left:-300,
        behavior:"smooth"
    })
})
right.addEventListener("click" ,function () {
    items.scrollBy({
        left:300,
        behavior:"smooth"
    })
})

/////////////////////////Counter//////////////////////////////
let plus = document.querySelector(".plus")
let counter = document.getElementById("counter")
let minus = document.querySelector(".minus")
let number = 0

plus.addEventListener("click", function () {
    number +=1
    counter.innerHTML = number
})

minus.addEventListener("click", function () {
    if(counter.innerHTML > 0) {
        number -=1
        counter.innerHTML = number
    }
})

//////////////////////////////////////////
let addCart = document.getElementById("add-cart")
let addCartAfter = document.querySelector("#cart span")

addCart.addEventListener("click", function () {
    addCartAfter.style.display = "inline-block"
})