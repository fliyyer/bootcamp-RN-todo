import React from 'react'
import TodoItem from './TodoItem'
const Todos = ({ todos, toggleCompleted, deleteTodo }) => {
    return (
        <div style={styles.container}>
            {todos.map((todo) => {
                return <TodoItem key={todo.id} deleteTodo={deleteTodo} toggleCompleted={toggleCompleted} todo={todo} />
            })}
        </div>
    )
}

const styles = {
    container: {
        width: '40%',
        margin: '0 auto',
    },
}

export default Todos