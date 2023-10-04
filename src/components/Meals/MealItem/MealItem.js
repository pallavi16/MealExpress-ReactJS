import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = props  => {

    const price = `$${props.price.toFixed(2)}`;

    return (<li className={classes.meal}>
        <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
        <MealItemForm label="Amount" input={{
            id: 'amount',
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            size: '20',
            placeholder: '1'
        }} button />
        </div>
    </li>
    )
}

export default MealItem;