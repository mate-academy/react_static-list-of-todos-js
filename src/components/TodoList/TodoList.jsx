import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) => (
  <section className="TodoList">
    {todos.map(todoTask => (
      <TodoInfo
        key={todoTask.id}
        todo={todoTask}
      />
    ))}
  </section>
);
