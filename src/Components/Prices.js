import React from 'react';
import CardList from './Card/CardList';
import {FoodMenu} from './data/FoodMenu';

const Prices = () => {
    return (
        <CardList FoodMenu = {FoodMenu} />
       
    )
}

export default Prices;
