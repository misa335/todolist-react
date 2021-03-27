import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";

const ListTodos = () => {

    const [todos, setTodos] = useState([]);

    //delete
    const deleteTodo = async (id) => {
        await axios.delete(`/todos/${id}`)
        .then(res => {
            setTodos(todos.filter(todo => todo.id !== id));
        }).catch (err => {
                 console.error(err.message);
        });
    };

    //getAlltodos
    const getTodos = async () => {
        await axios.get('/todos')
        .then(res => {
            console.log("res:", res);
            console.log("data:", res.data);
            setTodos(res.data);
        }).catch (err => {
            console.error(err.message);
        });
    };

    useEffect(() => {
        getTodos();
    }, []);

    // console.log(todos);
    return <Fragment>
        <table className="table mt-5 text-center">
            <thead>
                <tr>
                    <th>ToDo</th>
                    <th>Due</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {todos.map(todo => (
                    <tr key={todo.id}>
                        <td>{todo.todo}</td>
                        <td>{todo.due_day}</td>
                        <td>Edit</td>
                        <td>
                            <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </Fragment>
};

export default ListTodos;