import { todoListAtom } from '../recoil/atoms/todoAtom';
import { useRecoilValue } from 'recoil';
import { TodoItemCreator } from './TodoItemCreator';
import { TodoItem } from './TodoItem';
import FilterDropdown from './FilterDropDown';
import './todo.css'
import { filteredTodoListSelector } from '../recoil/selectors/filteredTodoSelector';

export const TodoMain = () => {

    const filteredTodoList = useRecoilValue(filteredTodoListSelector)

    return (
        <div className='parent-container'>
            <div>
                <TodoItemCreator />
                <FilterDropdown />
                {filteredTodoList.length > 0 ? (
                    <div style={{ color: 'white' }} className='todos-list'>
                        {filteredTodoList.map((filterItem) => (
                            <TodoItem key={filterItem.id} item={filterItem} />
                        ))}
                    </div>
                ) : (<div style={{ color: 'white' }}>You have not completed any tasks...</div>)}
                </div>
        </div>
            );
};