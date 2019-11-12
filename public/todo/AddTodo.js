import Component from '../Component.js';

class AddTodo extends Component {

    onRender(form) {
        const addTodo = this.props.addTodo;
        
        form.addEventListener('submit', async event => {
            event.preventDefault();
            
            const formData = new FormData(form);
            
            const newTodo = {
                task: formData.get('new-todo'),
                complete: false
            };

            try {
                await addTodo(newTodo);
                console.log(newTodo);
                // this only runs if no error:
                form.reset();
                document.activeElement.blur();
                location.reload();
            }
            catch (err) {
                // nothing to do as App will show error,
                // but will keep form from clearing...
            }
        });
    }

    renderHTML() {
        return /*html*/`
            <form class="add-todo">
                <input name="new-todo" required>
                <button>Add</button>
            </form>
        `;
    }
}

export default AddTodo;