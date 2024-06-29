export default function Item({task}){
    return (
        <div>
            <input type="checkbox" {task.done ? "checked":null}/>
            <h4>task.title</h4>
        </div>
    )
}