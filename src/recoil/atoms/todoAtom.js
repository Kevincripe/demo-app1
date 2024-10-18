import {atom} from 'recoil';

export const todoListAtom = atom({
    
    key: 'todoListState',
    default: {
        text: 'drink coffee',
        id: 13579,
        isComplete: false
    }
})