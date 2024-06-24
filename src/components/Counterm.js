import React from 'react';
import { useMealsListContext } from "../providers/MealsProvider";

const Counter = () => {
    const { meals } = useMealsListContext();

    // Calculate the number of meals that are currently clicked (grayed out)
    const clickedCount = meals.filter(meal => meal.clicked).length;

    return (
        <div>
            <h3>Number of meals today: {meals.length - clickedCount}</h3>
        </div>
    );
};

export default Counter;
