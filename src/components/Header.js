import React, { Fragment } from 'react';
import mealsImage from '../images/meals.jpeg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

function Header () {

return (
<Fragment>
    <header className={classes.header}>
        <h1>Meal Express</h1>
        <HeaderCartButton />
    </header>
    <div className={classes['main-image']}>
        <img src={mealsImage} alt="Meals On wheels" />
    </div>
</Fragment>
)};

export default Header;





