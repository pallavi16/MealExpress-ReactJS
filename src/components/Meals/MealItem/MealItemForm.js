import React from "react";
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {

    return (
        <form className={classes.form}>
             <div className={classes.input}>
            <label htmlForm={props.input.id}>{props.label}</label>
            <input id={props.input.id} {...props.input} />
            <button>+ Add</button>
        </div>

        </form>
       
    )
}

export default MealItemForm;
