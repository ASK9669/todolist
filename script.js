
document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addBtn = document.getElementById('add-btn');
    const taskList = document.getElementById('taskList');

    // Function to add a task
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const li = document.createElement('li');
        li.textContent = taskText;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.onclick = function() {
            taskList.removeChild(li);
        };

        li.appendChild(deleteBtn);
        taskList.appendChild(li);

        taskInput.value = '';
    }

    // Add task on button click
    addBtn.addEventListener('click', addTask);

    // Add task on Enter key press
    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
