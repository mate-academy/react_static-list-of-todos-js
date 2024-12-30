/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable prettier/prettier */
// Add the required props
import { UserInfo } from "../UserInfo/UserInfo";

export const TodoInfo = ({todo}) => (

<article className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}>

        <h2 className="TodoInfo__title">{todo.title}</h2>


        {todo.user && <UserInfo user={todo.user} />}

      </article>

);
