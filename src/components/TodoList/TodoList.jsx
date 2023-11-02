import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) => {
  if (todos.length !== 0) {
    return (
      <section className="TodoList">
        {todos.map(todo => <TodoInfo todo={todo} key={todo.id} />)}
      </section>
    );
  }

  return null;
};
