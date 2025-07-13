export const TodoList = ({ todos }) => (
    <>
        {todos.map(todo => (

            <section key={todo.id} className="TodoList">
                <article
                    className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}
                >
                    <h2 className="TodoInfo__title">{todo.title}</h2>

                    <a className="UserInfo" href={`mailto:${todo.user.email}`}>
                        {todo.user.name}
                    </a>
                </article>

                <article
                    className={`TodoInfo ${todos.completed ? 'TodoInfo--completed' : ''}`}
                >
                    <h2 className="TodoInfo__title">{todo.title}</h2>
                </article>
            </section>
        )
        )
        }
    </>

);
