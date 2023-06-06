function addTask() {
    var taskContainer = document.getElementById("taskContainer");
    var taskCount = taskContainer.children.length / 3 + 1;
    var taskLabel = document.createElement("label");
    taskLabel.for = "task" + taskCount;
    taskLabel.innerHTML = taskCount + ".";
    var taskInput = document.createElement("input");
    taskInput.type = "text";
    taskInput.id = "task" + taskCount;
    taskInput.className = "taskInput";
    taskContainer.appendChild(taskLabel);
    taskContainer.appendChild(taskInput);
    taskContainer.appendChild(document.createElement("br"));
    taskInput.focus();
    taskInput.onkeyup = function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            var task = document.getElementById("task" + taskCount);
            task.innerHTML = taskInput.value;
            taskInput.value = "";
            taskInput.focus();
        }
    };
}