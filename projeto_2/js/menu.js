const hamburguer = document.querySelector(".btn-hamb")
const menuOne = document.querySelector(".menu-one")

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle('active')
    menuOne.classList.toggle('active')
})