import Item from '../item/Item';

import './List.css';

function List({tasks, onDelete, onToggleProp}) {
    const elements = tasks.map(item => {
        const {id, ...itemProps} = item;
        return (
            <Item 
            key={id} 
            {...itemProps}
            onDelete={() => onDelete(id)}
            onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}/>   //name={item.name} salary={item.salary}
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default List;
