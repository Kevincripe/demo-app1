import { todoListAtom } from '../recoil/atoms/todoAtom';
import { useRecoilValue } from 'recoil';
import { TodoItemCreator } from './TodoItemCreator';
import {TodoItem} from './TodoItem';
import FilterDropdown from './FilterDropdown';
import './todo.css'
import { completedTodoListSelector } from '../recoil/selectors/completedTodoSelector';

export const TodoMain = () => {

    const todoList = useRecoilValue(todoListAtom)
    const completedTodoList = useRecoilValue(completedTodoListSelector)

    return (
        <div className='parent-container'>
            <div>
            <TodoItemCreator />
            <FilterDropdown />
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