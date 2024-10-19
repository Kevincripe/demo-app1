import { useRecoilState } from "recoil";
import { todoListAtom } from "../recoil/atoms/todoAtom";


export const TodoItem = ({ item }) => {

    const [todoList, setTodoList] = useRecoilState(todoListAtom)
    const index = todoList.findIndex((listItem) => listItem === item)
    

    return (
        <div>
            <input
                type="text"
                value={item.text}
            />
        </div>
    )
}