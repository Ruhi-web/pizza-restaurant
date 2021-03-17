import React from 'react'
import Card from './Card'

export const CardList = ({ FoodMenu }) => {
    const CardComponent = FoodMenu.map((items, i) => {
        return <Card pic={FoodMenu[i].pic} title={FoodMenu[i].title} desc={FoodMenu[i].description} price={FoodMenu[i].price} />

    })
    return (
        <div className="prices">
        <div className="container">
            <div className="row">
                {CardComponent}               
            </div>
        </div>
        </div>
    );
}

export default CardList;


