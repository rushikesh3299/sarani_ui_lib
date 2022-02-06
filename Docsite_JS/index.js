const sideBar = document.querySelector(".side-bar")
const menu = document.querySelector("#menu")

menu.addEventListener("click", ()=> {
    sideBar.classList.toggle("toggle-side-bar")
})