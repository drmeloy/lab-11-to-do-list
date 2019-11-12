import Component from '../Component.js';

class TodoItem extends Component {

    onRender(dom) {
        const todo = this.props.todo;
        const updateTodo = this.props.updateTodo;
        const removeTodo = this.props.removeTodo;

        const checkbox = dom.querySelector('input');
        checkbox.addEventListener('click', () => {
            todo.complete = !todo.complete;
            updateTodo(todo);
        });

        const removeButton = dom.querySelector('button');
        removeButton.addEventListener('click', () => {
            const confirmed = confirm(`Are you sure you want to remove "${todo.task}"?`);
            if (confirmed) {
                removeTodo(todo);
                location.reload();
            }
        });
    }

    renderHTML() {
        const todo = this.props.todo;

        return /*html*/`
        <li class="todo-item">
            <input type="checkbox" checked="${todo.complete}">
            <span class="item ${todo.complete}">${todo.task}</span>
            <button class="remove-button">X</button>
        </li>
        `;
    }
}

export default TodoItem;