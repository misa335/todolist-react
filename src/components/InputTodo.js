import React, { Fragment, useState } from 'react';
import axios from "axios";

const InputTodo = () => {

    const [todo, setTodo] = useState("");
    const [dueDay, setDueDay] = useState("");

    //create a todo
    const onSubmitForm = async (e) => {
        e.preventDefault();
        const body = {
            todo: todo,
            dueDay: dueDay
        };
        await axios.post("/todos", body)
        .then(res => {
            window.location="/";
            return res.data;
        }).catch (err => {
            console.error(err.message);
        });
    }
    // const onSubmitForm = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const body = { todo, dueDay };
    //         const res = await fetch("/todos", {
    //             method: "POST",
    //             headers: { "Content-Type": "application/json" },
    //             body: JSON.stringify(body)
    //         });
    //         window.location="/";
    //     } catch (err) {
    //         console.error(err.message);
    //     }
    // }

    return <Fragment>
        <h1 className="text-center mt-5">Misa's To Do List</h1>
        <form className="d-flex mt-5" onSubmit={onSubmitForm}>
            <input type="text" className="form-control" value={todo} onChange={e => setTodo(e.target.value)} />
            <input type="text" className="form-control" value={dueDay} onChange={e => setDueDay(e.target.value)} />
            <button className="btn btn-success">Add</button>
        </form>
    </Fragment>;
};

export default InputTodo;