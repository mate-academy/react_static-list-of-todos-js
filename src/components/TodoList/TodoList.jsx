import { TodoInfo } from "../TodoInfo/TodoInfo"

// Add the required props
export const TodoList = ({ todos }) => {
  return (
    <section className="TodoList">
      {todos.map(todo => (
        <article key={todo.id} className="TodoList__item">
          <TodoInfo todo = {todo} />
        </article>
      ))}
    </section>
  )
}
