import './Item.css';

function Item(props) {
    const {onDelete, text} = props;
  
    return (
    <li className="list-group-item">
        <div className="list-group-item-label">
            {text}
        </div>
        <div className='button-group'>
            <button type="button"
                    className="btn-trash btn-sm"
                    onClick={onDelete}>
                X
            </button>
        </div>
    </li>
  );
}

export default Item;
