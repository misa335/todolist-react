import React, { Fragment, useState } from "react";
import axios from "axios";

const EditTodo = (props) => {
    // console.log("before:", {list});
    const [newTodo, setNewTodo] = useState(props.list.todo);
    const [newDueDay, setNewDueDay] = useState(props.list.due_day);
    // console.log("after:", {list});

    const setCurrentList = () => {
        setNewTodo(props.list.todo);
        setNewDueDay(props.list.dueDay); 
    }

    const updateTodo = async (e) => {
        console.log(e);
        console.log("todo:", newTodo);
        console.log("dueday:", newDueDay);
        e.preventDefault();
        const body = { 
            todo: newTodo,
            dueDay: newDueDay
        };
        await axios.put(`/todos/${props.list.id}`, body)
        .then(await axios.get('/todos'))
        .then(res => {
            console.log(res);
            props.setLists(res.data);
            window.location="/";
        })
        // .then(() => await axios.get('/todos'))
        // .then(res => setTodos(res.data))
        .catch(err => {
            console.error(err.message);
        })
    };

    // const updateDueDay = async e => {
    //     e.prevenDefault();

    // };

    return <Fragment>
        <button type="button" className="btn btn-warning" data-toggle="modal" data-target={`#id${props.list.id}`}>
            Edit
        </button>

        <div className="modal" id={`id${props.list.id}`} onClick={e => setCurrentList()}>
            <div className="modal-dialog">
                <div className="modal-content">

                    <div className="modal-header">
                        <h4 className="modal-title">Edit Todo</h4>
                        <button type="button" className="close" data-dismiss="modal" onClick={e => setCurrentList()}>&times;</button>
                    </div>

                    <div className="modal-body">
                        <input type="text" className="form-control" value={newTodo} onChange={e => setNewTodo(e.target.value)}/>
                        <input type="text" className="form-control" value={newDueDay} onChange={e => setNewDueDay(e.target.value)}/>
                    </div>

                    <div class="modal-footer">
                        <button type="button" className="btn btn-warning" data-dismiss="modal" onClick={e => updateTodo(e)} >Edit</button>
                        <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={e => setCurrentList()}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
};

export default EditTodo;