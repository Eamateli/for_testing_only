import React from 'react';

const MealsContext = React.createContext();

const todaysMeals = [
    { name: "Baked Beans", clicked: false },
    { name: "Baked Sweet Potatoes", clicked: false },
    { name: "Baked Potatoes", clicked: false }
];

const MealsProvider = ({ children }) => {
    const [meals, setMeals] = React.useState(todaysMeals);

    const updateMeals = (updatedMeals) => {
        setMeals(updatedMeals);
    };

    return (
        <MealsContext.Provider value={{ meals, updateMeals }}>
            {children}
        </MealsContext.Provider>
    );
};

export const useMealsListContext = () => React.useContext(MealsContext);

export default MealsProvider;
