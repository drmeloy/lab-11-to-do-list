import Component from '../Component.js';

class TodoItem extends Component {

    onRender(dom) {
        const { todo } = this.props;
        const { onUpdate } = this.props;
        const { onRemove } = this.props;

        const checkbox = dom.querySelector('input');
        checkbox.addEventListener('click', () => {
            todo.complete = !todo.complete;
            onUpdate(todo);
        });

        const removeButton = dom.querySelector('button');
        removeButton.addEventListener('click', () => {
            const confirmed = confirm(`Are you sure you want to remove "${todo.task}"?`);
            if (confirmed) {
                onRemove(todo);
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