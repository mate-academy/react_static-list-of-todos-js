import { TodoInfo } from "../TodoInfo";
import todosFromServer from '../../api/todos.json';


// Add the required props
export const TodoList = ( {todos} ) => (
  <>
    <h1 className="App__title">Static list of todos</h1>
    <section className="TodoList">
      {todos.map(todo => (
        <>
          <TodoInfo
            todo={todo}
            key={todo.id}
          />
        </>
      )
        
      )}
    </section>
  </>
);
