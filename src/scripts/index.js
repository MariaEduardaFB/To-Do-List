const list = document.getElementById("list-container");
const add = document.getElementById("add-button");
const inputBox = document.getElementById("input-box");
let tasks = [];

add.addEventListener("click", () => { 
    if (inputBox.value === "") {
        alert("You must write something!");
    } else {
        const newElement = document.createElement("li");

        // Adiciona o botão "Colorize" antes do texto da tarefa
        const colorButton = document.createElement("button");
        colorButton.innerHTML = "";
        colorButton.classList.add("color-button");
        newElement.appendChild(colorButton);

        const taskText = document.createElement("span");
        taskText.innerHTML = inputBox.value;
        newElement.appendChild(taskText);


        list.appendChild(newElement);
        tasks.push({
            text: inputBox.value,
            colorized: false
        });
        updateLocalStorage();
    }
});

const updateLocalStorage = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

const localStorageTasks = localStorage.getItem('tasks');
if(localStorageTasks){
    tasks = JSON.parse(localStorageTasks);
    tasks.forEach((task) => {
        const newElement = document.createElement("li");

        // Adiciona o botão "Colorize" antes do texto da tarefa
        const colorButton = document.createElement("button");
        colorButton.innerHTML = "";
        colorButton.classList.add("color-button");
        newElement.appendChild(colorButton);

        const taskText = document.createElement("span");
        taskText.innerHTML = task.text;
        newElement.appendChild(taskText);

        // Adiciona a classe "clicked" se a tarefa estiver colorizada
        if (task.colorized) {
            colorButton.classList.add("clicked");
        }

        list.appendChild(newElement);
    });
}

// Adiciona o event listener para o botão "Colorize" dentro do loop forEach
document.querySelectorAll(".color-button").forEach((button) => {
    button.addEventListener("click", () => {
        button.classList.toggle("clicked");
    });
});
