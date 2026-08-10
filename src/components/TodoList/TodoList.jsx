import { TodoInfo } from '../TodoInfo/TodoInfo';

// Add the required props
export const TodoList = props => {
  const { todos } = props;

  return (
    <section className="TodoList">
      {todos.map(todo => (
        <TodoInfo key={todo.id} todo={todo} />
      ))}
    </section>
  );
};
