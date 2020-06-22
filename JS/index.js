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
        // let listOfTasks = document.createElement("ul");
        // let task = document.createElement("li");
        // let taskDiv = document.createElement("div");
        // taskDiv.contentEditable = true;
        // task.appendChild(taskDiv);
        // listOfTasks.appendChild(task);
        // document.getElementById("TaskList").appendChild(listOfTasks);

        document
          .querySelector("#addItem")
          .addEventListener("click", function() {
            let tl = document.querySelector("#TaskList");
            let item = document.createElement("input");
            let del = document.createElement("span");
            del.style.width = '50px';
            del.style.display = 'block';
            del.style.float = 'left';
            del.onclick = function() {
              this.parentNode.parentNode.removeChild(
                this.parentNode.previousSibling
              );
              this.parentNode.parentNode.removeChild(this.parentNode);
            };
            del.innerText = "X";
            del.style.color = "darkblue";
            del.style.cursor = "pointer";
            item.type = "checkbox";
            item.addEventListener("click", function() {
                if (this.checked == true) {
                    this.nextSibling.style.textDecorationLine = 'line-through';
                } else {
                    this.nextSibling.style.textDecorationLine = 'none';
                }
            })
            let label = document.createElement("label");
            label.htmlFor = "id";
            label.appendChild(
              document.createTextNode(document.querySelector("#item").value)
            );
            label.appendChild(del);
            tl.appendChild(item);
            tl.appendChild(label);
            tl.appendChild(document.createElement("br"));
          });
    })
})