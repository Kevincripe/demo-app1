import { useRecoilState } from "recoil"
import { todoListAtom } from "../recoil/atoms/todoAtom"
import { useState } from "react"


export const TodoItemCreator = () => {

    const [inputValue, setInputValue] = useState('')
    const [_, setTodoList] = useRecoilState(todoListAtom)

    const onChange = (event) => {
        setInputValue(event.target.value)
    }

    return (
        <div>
            <input type="text" value={inputValue} onChange={onChange}/>
            {console.log(inputValue)}
            <button >Add Task</button>
        </div>
    )
}