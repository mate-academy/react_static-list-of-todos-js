import { TodoInfo } from '../TodoInfo/TodoInfo';

export const TodoList = ({ todos }) => {
  return todos.map(
    todo =>
      todo.user && (
        <section className="TodoList">
          <TodoInfo todo={todo} key={todo.id} />
        </section>
      ),
  );
};
