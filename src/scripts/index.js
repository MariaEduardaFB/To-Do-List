const list = document.getElementById("list-container") //pega elemento pelo id e atribui a variável list
const add = document.getElementById("add-button") //pega elemento pelo id e atribui a variável add
const inputBox = document.getElementById("input-box") //pega o campo de entrada de texto
let tasks = [] //inicia um array vazio pra armazenar as tasks

add.addEventListener("click", () => { 
    if (inputBox.value === "") {
        alert("You must write something!");
    } else {
    const newElement = document.createElement("li") //cria novo elemento em memória
    newElement.innerHTML = inputBox.value//altera o valor do elemento html criado para algo visível
    list.appendChild(newElement)//atribui o novo elemento como filho do elemento list

    tasks.push(inputBox.value)// adiciona o valor das tasks no array 
    updateLocalStorage()
    }
})

const updateLocalStorage = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
}

const localStorageTasks = localStorage.getItem('tasks')
if(localStorageTasks){
    tasks = JSON.parse(localStorageTasks)
    tasks.forEach((task) => {
        const newElement = document.createElement("li") //cria novo elemento em memória
        newElement.innerHTML = task//altera o valor do elemento html criado para algo visível
        list.appendChild(newElement)
    })
}





 