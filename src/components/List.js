import React, {useState} from 'react'
import Form from './Form'
import Todo from './Todo'


function List() {
    const [tasks, setTasks] = useState([])

    // to add new task to the list
    const addTask = task => {
        // space remover, to avoid adding empty space
        if(!task.text || /^\s*$/.test(task.text)){
            return
        }

        // a spread that adds new values to existing array
        const newTasks = [task, ...tasks]

        // set value to new tasks
        setTasks(newTasks)

        //testing
        // console.log(task, ...tasks)
    }

    // toggle the completed tasks between true and false
    const completeTask = id => {
        let updatedTasks = tasks.map(task => {
            if(task.id === id){
                task.isComplete = !task.isComplete
            }
            return task
        })
        setTasks(updatedTasks)
    }

    // for deleting a task from the list
    const deleteTask = id => {
        const deleteArray = [...tasks].filter(task => task.id !== id)

        setTasks(deleteArray)
    }

    // for edit icon
    const updateTask = (taskId, newValue) => {
        // space remover
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return
        }

        setTasks(prev => prev.map(item => (item.id === taskId ? newValue : item)))
    }

    return (
        <div className="container">
            <h1>Add your tasks to the todo list!!!</h1>
            <Form onSubmit={addTask}/>
            
            <div className="content-scroll">
                <Todo tasks={tasks} completeTask={completeTask} deleteTask={deleteTask} updateTask={updateTask}/>
            </div>
            
        </div>
    )
}

export default List
  
