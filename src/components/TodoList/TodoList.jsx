// Add the required props
import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) => (
  <>
    <section className="TodoList">
      <div className="todos">
        {todos.map(todo => (
          <TodoInfo todo={todo} key={todo.id} />
        ))}
      </div>
    </section>
  </>
);
