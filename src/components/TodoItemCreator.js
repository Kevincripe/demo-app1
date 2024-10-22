import { useRecoilState } from "recoil"
import { todoListAtom } from "../recoil/atoms/todoAtom"
import { useState } from "react"


export const TodoItemCreator = () => {

    const [inputValue, setInputValue] = useState('')
    const [_, setTodoList] = useRecoilState(todoListAtom)

    const onChange = (event) => {
        setInputValue(event.target.value)
    }

    const addTodoItem = () => {
        if (inputValue) {
            setTodoList((prevTodoList) => [
                ...prevTodoList,
                {
                    text:inputValue,
                    isComplete:false,
                    id: Math.random() * 10000 + 1
                }
            ])
            setInputValue('')
        }
    }

    return (
        <div className="todo-creator">
            <input type="text" value={inputValue} onChange={onChange}/>
            <button onClick={addTodoItem} className="add-btn">Add Task</button>
        </div>
    )
}