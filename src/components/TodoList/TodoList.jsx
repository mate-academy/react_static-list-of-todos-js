import { TodoInfo } from '../TodoInfo';

// Add the required props
export const TodoList = ({ todos }) => (
  <>
    <section className="TodoList">
      {todos.map(todoTask => (
        <TodoInfo
          key={todoTask.id}
          todo={todoTask}
        />
      ))}
    </section>
  </>
);
