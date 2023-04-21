import React from "react";

import MealsSummary from "./MealsSummary";
import AvaliableMeals from "./AvailableMeals";

const Meals = () => {
    return(
        <React.Fragment>
            <MealsSummary/>
            <AvaliableMeals/>
        </React.Fragment>
    );
};

export default Meals;