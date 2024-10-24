import { todoListAtom } from '../atoms/todoAtom';
import { selector } from 'recoil';

export const completedTodoListSelector  = selector({
    key: 'completedTodoListSelector',
    get: ({get}) => {
        const todoList = get(todoListAtom);

        return todoList.filter((item) => item.isComplete);
    }
})
 