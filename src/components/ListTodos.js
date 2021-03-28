import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";

import EditTodo from "./EditTodo";

const ListTodos = () => {

    const [lists, setLists] = useState([]);

    //delete
    const deleteList = async (id) => {
        await axios.delete(`/todos/${id}`)
        .then(() => {
            setLists(lists.filter(list => list.id !== id));
            window.location="/";
        }).catch (err => {
                 console.error(err.message);
        });
    };

    //getAlltodos
    const getLists = async () => {
        await axios.get('/todos')
        .then(res => {
            console.log("res:", res);
            console.log("data:", res.data);
            setLists(res.data);
        }).catch (err => {
            console.error(err.message);
        });
    };

    useEffect(() => {
        getLists();
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
                {lists.map(list => (
                    <tr key={list.id}>
                        <td>{list.todo}</td>
                        <td>{list.due_day}</td>
                        <td>
                            <EditTodo list={list} setLists={setLists}/>
                        </td>
                        <td>
                            <button className="btn btn-danger" onClick={() => deleteList(list.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </Fragment>
};

export default ListTodos;