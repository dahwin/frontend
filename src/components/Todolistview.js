import TodoItem from './Todo'

export default function TodoView(props) {
    return (
      <div>
        <ul>
          {props.todoList.map(todo => <TodoItem key={todo.title} todo={todo} updateTodoList={props.updateTodoList} />)}
        </ul>
      </div>
    );
  }
  