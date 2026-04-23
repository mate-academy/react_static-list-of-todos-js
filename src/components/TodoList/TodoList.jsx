import { TodoInfo } from '../TodoInfo/TodoInfo';
// Add the required props
export const TodoList = ({ todos }) => (
  <>
    <section className="TodoList">
      {todos.map(td => {
        return <TodoInfo todo={td} key={td.id} />;
      })}
    </section>
  </>
);