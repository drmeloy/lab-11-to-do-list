import Component from '../Component.js';
import TodoItem from './TodoItem.js';

class TodoList extends Component {
    
    onRender(list) {
        const { todos } = this.props;
        const { onUpdate } = this.props;
        const { onRemove } = this.props;

        todos.forEach(todo => {
            const todoItem = new TodoItem({ 
                onUpdate,
                onRemove,
                todo });
            list.appendChild(todoItem.renderDOM());
        });
    }
    renderHTML() {
        return /*html*/`
            <ul class="todo-list">
                <li class="instructions">MARK DONE <( ' . ' )> TO DO ITEM <( ' . ' )> DELETE</li>
            </ul>
        `;
    }
}

export default TodoList;
