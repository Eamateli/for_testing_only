import React from 'react';
import { useMealsListContext } from "../providers/MealsProvider";


const MealsList = () => {
    const { meals, updateMeals } = useMealsListContext();

    const handleMealClick = (index) => {
        const updatedMeals = [...meals];
        updatedMeals[index] = { ...updatedMeals[index], clicked: !updatedMeals[index].clicked };
        updateMeals(updatedMeals);
    };

    const handleReset = () => {
        const resetMeals = meals.map(meal => ({ ...meal, clicked: false }));
        updateMeals(resetMeals);
    };

    return (
        <div>
            <h1>Meals List using Context API</h1>
            {meals.map((meal, index) => (
                <button
                    key={index}
                    className={`meal-button ${meal.clicked ? 'clicked' : ''}`}
                    onClick={() => handleMealClick(index)}
                    disabled={meal.clicked}
                >
                    {meal.name} {/* Render the 'name' property of the meal */}
                </button>
            ))}
            <button className="reset-button" onClick={handleReset}>Reset</button>
        </div>
    );
};

export default MealsList;
