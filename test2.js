document.addEventListener('DOMContentLoaded', function() {
    const todoInput = document.getElementById('todoInput');
    const addButton = document.getElementById('addButton');
    const todoList = document.getElementById('todoList');

    addButton.addEventListener('click', addTodo);
    todoInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTodo();
        }
    });

    function addTodo() {
        const taskText = todoInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.textContent = taskText;

            const completeButton = document.createElement('button');
            completeButton.textContent = 'Complete';
            completeButton.className = 'complete-button';
            completeButton.addEventListener('click', function() {
                li.classList.toggle('completed');
            });

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.className = 'delete-button';
            deleteButton.addEventListener('click', function() {
                todoList.removeChild(li);
            });

            li.appendChild(completeButton);
            li.appendChild(deleteButton);
            todoList.appendChild(li);
            todoInput.value = '';
        }
    }
});
