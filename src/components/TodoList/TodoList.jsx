// Add the required props
import { TodoInfo } from "../TodoInfo/TodoInfo";

export const TodoList = ({toDos}) =>
  <>
    <section className="TodoList">
      {
        toDos.map((toDo) => {
          return (
            <TodoInfo key={toDo.id} toDo={toDo} />
          )
        })
      }
    </section>
  </>;
