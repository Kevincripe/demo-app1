import { useRecoilState } from "recoil";
import { todoListAtom } from "../recoil/atoms/todoAtom";


export const TodoItem = ({ item }) => {

    const [todoList, setTodoList] = useRecoilState(todoListAtom)
    const index = todoList.findIndex((listItem) => listItem === item)

    const editItemText = (event) => {
        setTodoList([...todoList.slice(0, index),
        { ...item, text: event.target.value },
        ...todoList.slice(index + 1),
        ]);
    }

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
                className={item.isComplete.toString() === 'true' ? 'done-task' : ''}
                type="text"
                value={item.text}
                onChange={editItemText}
            />
            <input type="checkbox" checked={item.isComplete}
                onChange={toggleItemCompletion} />
        </div>
    )
}