import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) => (
  <section className="TodoList">
    {todos.map(todoInfo => (
      <TodoInfo todo={todoInfo} title={todoInfo.title} key={todoInfo.id} />
    ))}
  </section>
);
