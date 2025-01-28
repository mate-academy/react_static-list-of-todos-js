import TodoInfo from '../TodoInfo/TodoInfo';

export const TodoList = ({ todos }) => {
  return (
    <div className="todo-list">
      {todos.map(todo => (
        <TodoInfo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
