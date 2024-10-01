import { TodoInfo } from '../TodoInfo/TodoInfo';

export const TodoList = props => {
  return (
    <section className="TodoList">
      {props.todos.map(todo => (
        <TodoInfo todo={todo} key={todo.id} />
      ))}
    </section>
  );
};
