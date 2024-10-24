import { useRecoilState } from "recoil";
import { todoListAtom } from "../recoil/atoms/todoAtom";


export const TodoItem = ({ item }) => {

    const [todoList, setTodoList] = useRecoilState(todoListAtom)
    const index = todoList.findIndex((listItem) => listItem === item)

    const editItemText = (event) => {

        const newValue = {
            ...item,
            text: event.target.value
        }

        const newList = replaceItemAtIndex(todoList, index, newValue)

        setTodoList(newList);
    }

    const toggleItemCompletion = () => {

        const newValue = {
            ...item,
            isComplete: !item.isComplete
        }

        const newList = replaceItemAtIndex(todoList, index, newValue)

        setTodoList(newList)
    }

    const deleteItem = () => {

        const newList = removeItemAtIndex(todoList, index)

        setTodoList(newList)
    }


    return (
        <div className="container">
            <input
                className={item.isComplete.toString() === 'true' ? 'done-task' : ''}
                type="text"
                value={item.text}
                onChange={editItemText}
            />
            <input type="checkbox" checked={item.isComplete}
                onChange={toggleItemCompletion} />
            <button className="del-btn" onClick={deleteItem}>X</button>
        </div>
    )
}

const replaceItemAtIndex = (arr, index, newValue) => {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)]
}

const removeItemAtIndex = (arr, index) => {
    return [...arr.slice(0, index), ...arr.slice(index + 1)]
}