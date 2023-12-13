import { TodoInfo } from '../TodoInfo';

// Add the required props
export const TodoList = ({ toDoList }) => (
  <section className="TodoList">
    {toDoList.map(toDo => (
      <TodoInfo key={toDo.id} toDo={toDo} />
    ))}
  </section>
);
