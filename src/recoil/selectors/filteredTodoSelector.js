import { todoListAtom } from '../atoms/todoAtom';
import { filterOptionAtom } from '../atoms/filterOptionAtom';
import { selector } from 'recoil';

export const filteredTodoListSelector = selector({
    key: 'filteredTodoListSelector',
    get: ({ get }) => {
        const todoList = get(todoListAtom);
        const filterOption = get(filterOptionAtom)

        if (filterOption === 'all') {
            return todoList;
        } else if (filterOption === 'completed') {
            return todoList.filter((item) => item.isComplete);
        }
        return [];
    }
})