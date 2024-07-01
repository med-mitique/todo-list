export default function Item({index, task, onRemove, onDone}){
    let input;
    
    if (task.done) 
        input = <input onChange={(e) => {onDone(e, index);}} type="checkbox" checked/>
    else
        input = <input onChange={(e) => onDone(e, index)} type="checkbox"/>
    

    return (
        <div className="item">
            <label>
                {input}
                <span className="checkmark"></span>
            </label>
            <div>
                <h4>{task.title}</h4>
                <p>{task.date}</p>
            </div>
            
            <i className="fa-solid fa-trash" onClick={(e) => onRemove(e, index)}></i>
            <i className="fa-solid fa-pen" onClick={(e) => onRemove(e, index)}></i>
        </div>
    )
}