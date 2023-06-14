const toggleBtn = document.querySelector(".hamburger-btn")
const elNavbar = document.querySelector(".navbar")
const elNavlist = document.querySelector(".nav-list")


toggleBtn.addEventListener("click", function(e){

    if(toggleBtn.textContent == "X"){
        toggleBtn.textContent = "🍔"
    } else {
        toggleBtn.textContent = "X"
    }
    elNavbar.classList.toggle("navbar-toggle")
    elNavlist.classList.toggle("navlist-toogle")

})