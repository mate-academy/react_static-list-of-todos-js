import { TodoInfo } from '../TodoInfo';

// Add the required props
export const TodoList = ( {todos} ) => (
  <>
    <h1 className="App__title">Static list of todos</h1>
    <section className="TodoList">
      <ul>
        {todos.map(todo => (
          <li>
            <TodoInfo
              todo={todo}
              key={todo.id}
            />
          </li>
        ))}
      </ul>
    </section>
  </>
);
