import {todoListAtom} from '../recoil/atoms/todoAtom';
import { useRecoilValue } from 'recoil';

export const TodoMain = () => {
    const todoList = useRecoilValue(todoListAtom)
    return (
        <div>
            <div>
                {console.log(todoList)}
            </div>
        </div>
    )
}