import React, {Fragment} from 'react'
import mealsImage from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HearderCartButton from './HearderCartButton'

const Header = (props) => {
  return (
    // Header Section Component
    <Fragment>
        <header className={classes.header}>
            <h1>Jollikod</h1>
            <HearderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt = "A table full of delicious food"/>
        </div>
    </Fragment>
  )
}

export default Header