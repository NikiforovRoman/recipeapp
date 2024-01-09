import React from 'react';
import "./Meal.scss";
import { NavLink } from 'react-router-dom';

const MealList = ({meals}) => {

  return (
    <div className='section-wrapper'>
      <div className='container'>
        <h2 className='sc-title'>Meals</h2>
        <section className='sc-meal grid'>
          {
            meals?.map(mealsItem => {
              const {idMeal: id, strMeal: meal, strArea: area, strCategory: category, strMealThumb: thumbnail} = mealsItem;
              return (
                <NavLink to={`/meal/${id}`} className='meal-itm align-center justify-center' key={id}>
                  <div className='meal-itm-img'>
                    <img src={thumbnail} alt={meal} />
                    <div className='meal-itm-cat bg-orange text-orange fw-6'>{category}</div>
                  </div>
                  <div className='meal-itm-body'>
                    <div className='meal-itm-body-info flex flex-column'>
                      <div className='area fs-14 ls-1 fw-5'>{area}</div>
                      <div className='meal fw-15 fw-7 op-9'>{meal}</div>
                    </div>
                  </div>
                </NavLink>
              )
            })
          }
        </section>
      </div>
    </div>
  )
}

export default MealList;