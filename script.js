let tasklist = document.getElementById("tasklist");

        function addTask() {
            let taskinput = document.getElementById("taskinput");
            let taskText = taskinput.value;

            if (taskText === "") {
                return;
            }

            let li = document.createElement("li");
            li.textContent = taskText;

            let editbutton = document.createElement("button");
            editbutton.innerHTML = '<ion-icon name="pencil-outline" class= "modify"></ion-icon>';
            editbutton.onclick = function () {
                editTask(li);
            };

            let deletebutton = document.createElement("button");
            deletebutton.innerHTML = '<ion-icon name="trash-outline" class= "delete"></ion-icon>';
            deletebutton.onclick = function () {
                deleteTask(li);
            };

            li.appendChild(editbutton);
            li.appendChild(deletebutton);
            tasklist.appendChild(li);

            taskinput.value = "";
        }

        function editTask(task) {
            let taskText = task.firstChild.textContent;
            let newtaskText = prompt('Modifier la tâche :', taskText);

            if (newtaskText === null || newtaskText === "") {
                return;
            }
            task.firstChild.textContent = newtaskText;
        }

        function deleteTask(task) {
            tasklist.removeChild(task);
        }