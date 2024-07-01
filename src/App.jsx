import React, { useState, useEffect } from "react";
import List from "./List";
import Add from "./Add";

export default function App(){
    const [display, setDisplay] = useState({display:'none'});
    const [tasks, setTasks] = useState([]);
    const [isEdit, setIsEdit] = useState(false);

    const showAdd = _ => {
        setDisplay({display:'block'});
        document.body.style.overflow = 'hidden'
    }

    const hideAdd = _ => {
        setDisplay({display:'none'});
    }

    useEffect(() => {
        const storedTasks = localStorage.getItem('tasks');
        console.log(storedTasks);
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks));
            setTasks(prev => prev.map(task => {
                if(!task.done) task = {...task, done: false}
                return task
            }));
        }
    }, []);

    const addTask = (_, task) => {
        const newTasks = [...tasks, task];
        setTasks(newTasks);
        localStorage.setItem('tasks', JSON.stringify(newTasks));
    };

    const removeTask = (_, index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
        localStorage.setItem('tasks', JSON.stringify(newTasks));
    };

    const clearTasks = () => {
        setTasks([]);
        localStorage.removeItem('tasks');
    };

    const changeDone = (e, index) => {
        setTasks(prev =>{
            const newTasks = [...prev];
            newTasks[index].done = !newTasks[index].done
            localStorage.setItem('tasks', JSON.stringify(newTasks));
            return newTasks;
        });
    }

    const editTask = (e, index, task) => {
        setTasks(prev => {
            const newTasks = [...prev];
            newTasks[index] = task
            localStorage.setItem('tasks', JSON.stringify(newTasks));
            return newTasks;
        });
    }
    return (
        <div className="container">
            <h1>Todo List</h1>
            <div className="control">
                <button onClick={showAdd} className="btn add">add task</button>
                <select defaultValue="Select Filter" className="form-select w-auto ms-auto bg-dark-subtle" name="filter" id="filter">
                    <option value="1" >all</option>
                    <option value="2">expire today</option>
                    <option value="3">created today</option>
                </select>
            </div>
            <List tasks={tasks} remove={removeTask} edit={editTask} done={changeDone}/>
            <Add display={display} hide={hideAdd} edit={isEdit} add={addTask}/>
        </div>
    )
}