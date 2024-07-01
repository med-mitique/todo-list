import React, {useState} from 'react'
import './Add.css'

export default function Add({display, hide, add}) {

  const [data, setData] = useState({title:'', date:'', done: false})  
  
  const changeTitle = (e)=>{
    setData({...data, title: e.target.value});
  }
  const changeDate = (e)=>{
    setData({...data, date: e.target.value});
  }

  const addTask = (e) => {
    if (data.title && data.date) {
      add(e, data)
    }
  }

  return (
    <div className='add-bg' style={display}>
      <div className="add-div">
        <span onClick={hide}><i className="fa-solid fa-xmark"></i></span>
        <h4>Add new task.</h4>
        <input id='title' onChange={changeTitle} type="text" placeholder='Title' required/>
        <input id='date' onChange={changeDate} type="date" placeholder='Expired Date' required/>
        <button value='Add' className='btn' onClick={(e)=>addTask(e)}>Add</button>
        
      </div>
    </div>
  )
}