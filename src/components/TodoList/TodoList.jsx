import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) => (
  <div>
    <section className="TodoList">
      {todos.map(todo => <TodoInfo todo={todo} key={todo.id} />)}
    </section>
  </div>
);
