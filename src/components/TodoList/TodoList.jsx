import { TodoInfo } from '../TodoInfo/TodoInfo';

// Add the required props
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
