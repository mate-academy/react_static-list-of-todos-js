import { TodoInfo } from '../TodoInfo/TodoInfo';

export const TodoList = ({ todos }) => (
  <>
    {todos.map(todo => (
      <section className="TodoList">
        <TodoInfo todo={todo} key={todo.id} />
      </section>
    ))
    }
  </>
);
