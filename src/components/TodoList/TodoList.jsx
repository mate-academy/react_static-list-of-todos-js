import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) => (
  <section className="TodoList">
    {todos && todos.map(todo => <TodoInfo todo={todo} key={todo.id} />)}
  </section>
);
