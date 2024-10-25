import {useRecoilState} from 'recoil';
import {filterOptionAtom} from '../recoil/atoms/filterOptionAtom';
import './todo.css'

const FilterDropdown = () => {
    const [filterOption, setFilterOption] = useRecoilState(filterOptionAtom);

    const handleFilterChange = (e) => {
        setFilterOption(e.target.value)
    }

    return (
        <div className='filter-dropdown'>
            <span className='filter-text'>Filter Todos:</span>
                <select value={filterOption} onChange={handleFilterChange}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="starred">Starred</option>
                </select>
        </div>
    );
};

export default FilterDropdown;