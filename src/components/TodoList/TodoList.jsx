import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) => (
  todos.map(todo => (
    <section key={todo.id} className="TodoList">
      <TodoInfo todo={todo} />
    </section>
  )));
