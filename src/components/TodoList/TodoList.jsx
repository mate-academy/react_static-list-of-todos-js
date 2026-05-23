import { TodoInfo } from "../TodoInfo/TodoInfo";
import { UserInfo } from "../UserInfo/UserInfo";

// Add the required props
export const TodoList = ({ todos }) => (
  <section className="TodoList">
    {todos.map((todo) => (
      <TodoInfo todo={todo} key={todo.id} />
    ))}
  </section>
)
