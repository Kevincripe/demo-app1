import { useRecoilState } from "recoil";
import { todoListAtom } from "../recoil/atoms/todoAtom";


export const TodoItem = ({ item }) => {

    const [todoList, setTodoList] = useRecoilState(todoListAtom)
    const index = todoList.findIndex((listItem) => listItem === item)
    
    const toggleItemCompletion = () => {
        setTodoList([...todoList.slice(0, index), 
        {
            ...item, 
            isComplete: !item.isComplete
        }, 
        ...todoList.slice(index + 1)])
    }

    return (
        <div className="container">
            <input
                type="text"
                value={item.text + ": " + item.isComplete}
            />
            <input type="checkbox" checked={item.isComplete}
            onChange={toggleItemCompletion} />
        </div>
    )
}