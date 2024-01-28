import { TodoInfo } from '../TodoInfo/TodoInfo';

export const TodoList = ({ todos }) => (
  <>
    <h1 className="App__title">Static list of todos</h1>
    <section className="TodoList">
      {todos.map(item => <TodoInfo todo={item} key={item.id} />)}
    </section>
  </>
);
