// Add the required props

import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) => (
  <>
    {todos.map(todo => (
      <section className="TodoList" key={todo.id}>
        <TodoInfo todo={todo} />
      </section>
    ))}
  </>
);
