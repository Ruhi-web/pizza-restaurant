import React from 'react';

const Card = ({pic, title, desc, price} ) => {
    return (
        <div className="col-lg-4 col-6">
                    <div className="price">
                        <div className="price_img">
                            <img src={pic} alt="img"/>
                        </div>
                        <h1 className="price_heading">{title}</h1>
                        <p className="price_description">{desc}</p>
                        <p className="price_cost">{price}</p>
                    </div>
        </div>
    );

}

export default Card;