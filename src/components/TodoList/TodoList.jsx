import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) => (
  <>
    <section className="TodoList">
      {todos.map(listCh => (
        <TodoInfo
          todo={listCh}
          key={listCh.id}
        />
      ))}
    </section>
  </>
);
