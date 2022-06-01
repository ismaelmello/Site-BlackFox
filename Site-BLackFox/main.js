const form = document.querySelector("form")
form.addEventListener("submit", ev => {
ev.preventDefault()
localStorage.setItem("name", form.name.checked)
localStorage.setItem("password", form.password.checked)
alert("Salvou!")
})
const name = localStorage.getItem("name") ?? "true"
const password = localStorage.getItem("password") ?? "true"
form.name.value = name
form.password.value = password