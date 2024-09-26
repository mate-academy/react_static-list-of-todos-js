import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) => {
  return (
    <>
      <h1 className="App__title">Static list of todos</h1>
      <section className="TodoList">
        {todos.map(element => (
          <TodoInfo key={element.id} todo={element} />
        ))}
      </section>
    </>
  );
};
