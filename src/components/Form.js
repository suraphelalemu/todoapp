import React, {useState, useEffect, useRef} from 'react'

function Form(props) {
    const [input, setInput] = useState('');

    // to record what is typed
    const onChangeHandler = e => {
        setInput(e.target.value) // records what is typed!!!
    }

    // to stop from refreshing at submit
    const submitHandler = e => {
        e.preventDefault();

        // receives props
        props.onSubmit({
            id: Math.floor(Math.random() * 1000), // generate random id
            text: input // the actual text we typed
        })
    }

    // fix the auto focus on input fields
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    return (
        <div>
            <form className="task-form" onSubmit={submitHandler}>
                {props.update ? (
                    <>
                        <input 
                            type="text" 
                            placeholder="Update a task" 
                            value={input} name="text" 
                            className="task-input form-control"
                            onChange={onChangeHandler}
                            ref={inputRef}
                        />
                        <br/>
                        <button className="task-button btn btn-secondary">Update task</button>
                    </>
                ) : (
                    <>
                        <input 
                            type="text" 
                            placeholder="Add a task" 
                            value={input} name="text" 
                            className="task-input form-control"
                            onChange={onChangeHandler}
                            ref={inputRef}
                        />
                        <br/>
                        <button className="task-button btn btn-secondary">Add task</button>
                    </>
                )}
            </form>
        </div>
    )
}

export default Form

