import { todoListAtom } from '../recoil/atoms/todoAtom';
import { useRecoilValue } from 'recoil';
import { TodoItemCreator } from './TodoItemCreator';
import {TodoItem} from './TodoItem';
import './todo.css'

export const TodoMain = () => {

    const todoList = useRecoilValue(todoListAtom)

    return (
        <div className='parent-container'>
            <div>
            <TodoItemCreator />
                {todoList.length > 0 && (
                    <div style={{ color: 'white' }} className='todos-list'>
                        {todoList.map((todoItem) => (
                            <TodoItem key={todoItem.id} item={todoItem} />
                            ))}
                    </div>
                )}
            </div>
        </div>
    )
}