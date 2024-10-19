import {todoListAtom} from '../recoil/atoms/todoAtom';
import { useRecoilValue } from 'recoil';
import { TodoItemCreator } from './TodoItemCreator';
import './todo.css'

export const TodoMain = () => {

    const todoList = useRecoilValue(todoListAtom)
    
    return (
        <div className='parent-container'>
            <TodoItemCreator/>
            <div>
                {console.log(todoList)}
            </div>
        </div>
    )
}