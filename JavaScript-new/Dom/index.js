document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form-todo');
    const input = form.querySelector('input[type="text"]');
    const todoList = document.createElement('ul');
    form.parentElement.appendChild(todoList);

    // Load todos from local storage
    loadTodos();

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const todoText = input.value.trim();
        if (todoText !== '') {
            addTodoItem(todoText);
            input.value = '';
        }
    });

    function addTodoItem(todoText, completed = false) {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = todoText;
        if (completed) {
            span.style.textDecoration = 'line-through';
        }
        const checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.checked = completed;
        checkBox.addEventListener('change', () => {
            if (checkBox.checked) {
                span.style.textDecoration = 'line-through';
            } else {
                span.style.textDecoration = 'none';
            }
            saveTodos();
        });

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('btn');
        removeBtn.addEventListener('click', () => {
            li.remove();
            saveTodos();
        });

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.classList.add('btn');
        editBtn.addEventListener('click', () => {
            const input = document.createElement('input');
            input.type = 'text';
            input.value = span.textContent;
            li.insertBefore(input, span);
            li.removeChild(span);

            const saveBtn = document.createElement('button');
            saveBtn.textContent = 'Save';
            saveBtn.classList.add('btn');
            saveBtn.addEventListener('click', () => {
                if (input.value.trim() !== '') {
                    span.textContent = input.value.trim();
                    li.insertBefore(span, input);
                    li.removeChild(input);
                    li.removeChild(saveBtn);
                    li.insertBefore(editBtn, removeBtn);
                    saveTodos();
                } else {
                    alert('Todo text cannot be empty');
                }
            });

            li.insertBefore(saveBtn, removeBtn);
            li.removeChild(editBtn);
        });

        li.appendChild(checkBox);
        li.appendChild(span);
        li.appendChild(editBtn);
        li.appendChild(removeBtn);
        todoList.appendChild(li);
        saveTodos();
    }

    function saveTodos() {
        const todos = [];
        todoList.querySelectorAll('li').forEach((li) => {
            const span = li.querySelector('span');
            const checkBox = li.querySelector('input[type="checkbox"]');
            todos.push({
                text: span.textContent,
                completed: checkBox.checked,
            });
        });
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    function loadTodos() {
        const todos = JSON.parse(localStorage.getItem('todos')) || [];
        todos.forEach((todo) => {
            addTodoItem(todo.text, todo.completed);
        });
    }

    // Smooth scroll to signup section when clicking "Learn More" button
    const learnMoreBtn = document.querySelector('.btn-headline');
    learnMoreBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const signupSection = document.querySelector('.section-signup');
        signupSection.scrollIntoView({ behavior: 'smooth' });
    });

    // Smooth scroll to signup section when clicking "Sign Up" link in navigation
    const signupLink = document.querySelector('.nav-items li:nth-child(3) a');
    signupLink.addEventListener('click', (e) => {
        e.preventDefault();
        const signupSection = document.querySelector('.section-signup');
        signupSection.scrollIntoView({ behavior: 'smooth' });
    });

    // Scroll to todo section when clicking "Todo" link in navigation
    const todoLink = document.querySelector('.nav-items li:nth-child(2) a');
    todoLink.addEventListener('click', (e) => {
        e.preventDefault();
        const todoSection = document.querySelector('.todo-section');
        todoSection.scrollIntoView({ behavior: 'smooth' });
    });

    // Form Validation Logic
    const signupForm = document.querySelector('.signup-form');
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = signupForm.querySelector('#username').value.trim();
        const password = signupForm.querySelector('#password').value.trim();
        const confirmPassword = signupForm.querySelector('#confirmPassword').value.trim();
        const phone = signupForm.querySelector('#phone').value.trim();
        const email = signupForm.querySelector('#email').value.trim();

        if (username === '' || password === '' || confirmPassword === '' || phone === '' || email === '') {
            alert('Please fill in all fields');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        alert('Sign up successful');
        signupForm.reset();
    });
});
