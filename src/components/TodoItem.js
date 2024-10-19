

export const TodoItem = ({item}) => {

    return (
        <div>
        <input 
        type="text"
        value={item.text} 
        />
        </div>
    )
}