
// document.addEventListener("DOMContentLoaded", function() {
//     const createList = document.getElementById("createList");

//     createList.addEventListener("click", function() {
//         let createListName = prompt("Enter a list name");

//         const taskListName = document.getElementById("TaskListName");
//         taskListName.innerText = createListName;
//     })
// })

document.addEventListener("DOMContentLoaded", function() {
    const createList = document.getElementById("createList");

    createList.addEventListener("click", function() {
        const createListName = document.getElementById("createListName").value;

        const taskListName = document.getElementById("TaskListName");
        taskListName.innerText = createListName;
        let listOfTasks = document.createElement("ul");
        let task = document.createElement("li");
        let taskDiv = document.createElement("div");
        taskDiv.contentEditable = true;
        task.appendChild(taskDiv);
        listOfTasks.appendChild(task);
        document.getElementById("TaskList").appendChild(listOfTasks);

    })
})