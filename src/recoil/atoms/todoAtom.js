import {atom} from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const todoListAtom = atom({
    
    key: 'todoListState',
    default: [{
        text: 'drink coffee',
        id: 13579,
        isComplete: false
    }],
    effects_UNSTABLE: [persistAtom]
})