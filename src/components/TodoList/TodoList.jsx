import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) => (
  <>
    <section className="TodoList">
      {todos.map(elem => <TodoInfo key={elem.id} todo={elem} />)}
    </section>
  </>
);
