import React from "react";
import List from "./List";

export default function App(){
    return (
        <>
            <h1>Todo List</h1>
            <div className="head">
                <button className="btn add-task">add task</button>
                <select name="filter" id="filter">
                    <option value="1">all</option>
                    <option value="2">expire today</option>
                    <option value="3">created today</option>
                </select>
            </div>
            <List />
        </>
    )
}