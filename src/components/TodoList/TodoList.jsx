import { TodoInfo } from '../TodoInfo';
import { todos } from '../function';

export const TodoList = () => (
  <>
    <section className="TodoList">
      {
        todos.map(todo => (
          <TodoInfo todo={todo} key={todo.id} />
        ))
      }
    </section>
  </>
);
