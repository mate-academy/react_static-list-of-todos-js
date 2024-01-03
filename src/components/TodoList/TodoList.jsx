import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) => (
  <section className="TodoList">
    {todos.map(task => (
      <TodoInfo todo={task} key={task.id} />
    ))}
  </section>
);
