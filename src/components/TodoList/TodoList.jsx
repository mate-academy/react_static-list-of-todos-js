import { TodoInfo } from '../TodoInfo';

// Add the required props
export const TodoList = (props) => {
  const { todos } = props;

  return (
    <section className="TodoList">
      {
        todos.map(
          todo => (<TodoInfo todo={todo} key={todo.id} />),
        )
      }
    </section>
  );
};
