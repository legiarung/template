import React, { useEffect, useState } from 'react';
import { get } from '../../redux/util/api';


const ViewFood = () => {
    const [food, setfood] = useState([]);
    console.log(food)
    useEffect(() => {
        try {
            get("http://localhost:5000/food").then(res => setfood(res.data))
        } catch (error) {
            console.log(error)
        }
    }, []);
    return (
        <div>
            {food.map(item => <div key={item._id}>{item.name}</div>)}
        </div>
    );
};


export default ViewFood;
