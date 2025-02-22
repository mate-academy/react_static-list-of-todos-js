// Add the required props
import React from "react";
import { useEffect } from "react";
import { TodoInfo } from "../TodoInfo/TodoInfo";


export const TodoList = ({todos}) => {

   
    return (
        <section className="TodoList">

            {todos.map((todo) => (
                <TodoInfo key={todo.id} todo={todo} />
            ))}



            {/* <article className="TodoInfo TodoInfo--completed">
                <h2 className="TodoInfo__title">HTML</h2>

                <a className="UserInfo" href="mailto:Sincere@april.biz">
                Leanne Graham
                </a>
            </article> */}


            {/* {todos.map((todo) => (
                <article key={todo.id} className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}>
                    <h2 className="TodoInfo__title">{todo.title}</h2>
                    <a className="UserInfo" href="mailto:Sincere@april.biz">
                        {todo.user.name}
                    </a>
                </article>
            ))} */}


            {/* <article className="TodoInfo TodoInfo--completed">
                <h2 className="TodoInfo__title">CSS</h2>

                <a className="UserInfo" href="mailto:Sincere@april.biz">
                Leanne Graham
                </a>
            </article>

            <article className="TodoInfo TodoInfo--completed">
                <h2 className="TodoInfo__title">JS</h2>

                <a className="UserInfo" href="mailto:Shanna@melissa.tv">
                Ervin Howell
                </a>
            </article>

            <article className="TodoInfo">
                <h2 className="TodoInfo__title">React</h2>

                <a className="UserInfo" href="mailto:Nathan@yesenia.net">
                Clementine Bauch
                </a>
            </article> */}
        </section>

    )



};
