import React from 'react'
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css'
import MealItem from './MealItem/MealItem';
const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Adobong Manok',
    description: 'Fresh na chicken na inadobo',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Lumpiang Shanghai',
    description: 'Laging binibulsa tuwing may handaan at paboritong lahat',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Sizzling Sisig ',
    description: 'Sa sobrang init, mapapaso ang iyong sa bibig sa sobrang sarap',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Pinakbet',
    description: 'Sari saring gulay na ginisa',
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) =>  <MealItem
  key={meal.id}
  name={meal.name}
  description={meal.description}
  price={meal.price}
/>);
  return (
    <section className={classes.meals}>
    <Card>
    <ul>{mealsList}</ul>
    
    </Card>
    
  </section>
  )
}

export default AvailableMeals