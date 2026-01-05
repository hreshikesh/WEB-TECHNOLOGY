import { useState } from "react";



function ToDoForm({ todo, setTodo }) {

    function handleSubmit(e) {
        e.preventDefault();
        setTodo([...todo, e.target.todo.value])
        console.log(todo);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" className="todoInput" placeholder="Enter Your todo" name="todo"></input>
                <button type="submit" className="todoSubmit">Add+</button>
            </form>
        </div>
    )
}


const Todo = () => {
    const [todo, setTodo] = useState([]);

    function handleDelete(i) {
        const updatedTodo =todo.filter((task,index)=>index!==i);
        setTodo(updatedTodo);
    }


    return (
        <div>
            <h1>Todo list</h1>
            <h3>Add Your Task</h3>
            <ToDoForm todo={todo} setTodo={setTodo} />

            <ul className="listContainer">
                {todo.length > 0 &&
                    todo.map((task, index) => (
                        <li key={index} className="taskList">
                            {task}
                            <button type="button" className="deleteButton" onClick={() => handleDelete(index)}>
                                delete
                            </button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Todo;