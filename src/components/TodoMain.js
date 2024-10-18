import {todoListAtom} from '../recoil/atoms/todoAtom';
import { useRecoilValue } from 'recoil';
import { TodoItemCreator } from './TodoItemCreator';

export const TodoMain = () => {
    const todoList = useRecoilValue(todoListAtom)
    return (
        <div>
            <TodoItemCreator/>
            <div>
                {console.log(todoList)}
            </div>
        </div>
    )
}