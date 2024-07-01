import React from "react"
import Item from "./Item"

export default function List({ tasks, remove, done, edit }) {

  return (
    <div className="list">
      {tasks.map((task, i) =>
        <Item key={i} index={i} task={task} onRemove={remove} onDone={done} onEdit={edit} />
      )}
    </div>
  )
}