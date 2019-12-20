const addForm = document.querySelector('.add'),
  list = document.querySelector('.todos'),
  search = document.querySelector('.search input');

//Todo template
addTodo = todo => {
  let html = `<li class="todo">
              <span>${todo}</span>
              <i class="far fa-trash-alt delete"></i>
              </li>`;
  list.innerHTML += html;
};

//Create todos
addForm.addEventListener('submit', e => {
  e.preventDefault();
  const todo = addForm.add.value.trim();
  if (todo.length) {
    addTodo(todo);
    addForm.reset();
  }
});
// Delete todos
list.addEventListener('click', e => {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }
});

// Search todos
const filteredSearch = text => {
  Array.from(list.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(text))
    .map(todo => todo.classList.add('hidden'));

  Array.from(list.children)
    .filter(todo => todo.textContent.toLowerCase().includes(text))
    .map(todo => todo.classList.remove('hidden'));
};

search.addEventListener('keyup', () => {
  const text = search.value.trim().toLowerCase();
  filteredSearch(text);
});
