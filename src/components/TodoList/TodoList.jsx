import { TodoInfo } from '../TodoInfo';

// Add the required props
export const TodoList = ({ todoList }) => (
  <>
    <section className="TodoList">
      {todoList.map(todoTask => (
        <TodoInfo
          key={todoTask.id}
          todoTask={todoTask}
        />
      ))}
    </section>
  </>
);
