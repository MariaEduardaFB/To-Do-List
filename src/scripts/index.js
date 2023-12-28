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
        colorButton.addEventListener("click", () => toggleColor(newElement));
        newElement.appendChild(colorButton);

        const taskText = document.createElement("span");
        taskText.innerHTML = inputBox.value;
        newElement.appendChild(taskText);

        // Adiciona o botão de remoção
        const removeButton = document.createElement("button");
        removeButton.innerHTML = "✖";
        removeButton.classList.add("remove-tasks");
        removeButton.addEventListener("click", () => removeTask(newElement));
        newElement.appendChild(removeButton);

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

const toggleColor = (taskElement) => {
    const colorButton = taskElement.querySelector(".color-button");
    colorButton.classList.toggle("clicked");
    updateLocalStorage();
}

const removeTask = (taskElement) => {
    const taskText = taskElement.querySelector("span").innerHTML;
    
    // Remove a tarefa do array tasks
    tasks = tasks.filter(task => task.text !== taskText);
    
    // Remove a tarefa do localStorage
    updateLocalStorage();
    
    // Remove a tarefa do DOM
    taskElement.remove();
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
        colorButton.addEventListener("click", () => toggleColor(newElement));
        newElement.appendChild(colorButton);

        const taskText = document.createElement("span");
        taskText.innerHTML = task.text;
        newElement.appendChild(taskText);

        // Adiciona o botão de remoção
        const removeButton = document.createElement("button");
        removeButton.innerHTML = "✖";
        removeButton.classList.add("remove-tasks");
        removeButton.addEventListener("click", () => removeTask(newElement));
        newElement.appendChild(removeButton);

        // Adiciona a classe "clicked" se a tarefa estiver colorizada
        if (task.colorized) {
            colorButton.classList.add("clicked");
        }

        list.appendChild(newElement);
    });
}
