import { TodoInfo } from '../TodoInfo';

const TodoList = ({ todos }) => {
  return todos.map(todo => (
    <section key={todo.id} className="TodoList">
      <TodoInfo todo={todo} />
    </section>
  ));
};

export { TodoList };
