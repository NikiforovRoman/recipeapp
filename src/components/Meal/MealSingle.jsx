import React from 'react';
import './Meal.scss';
import { FaUtensilSpoon } from 'react-icons/fa';
import { AiFillHome, AiOutlineCheckSquare } from 'react-icons/ai';
import { BiChevronsRight } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';

const MealSingle = ({meal}) => {
  let tags = meal?.tags?.split(',');
  let instructions = meal?.instructions?.split('\r\n');
  instructions = instructions?.filter(instruction => instruction.length > 1);
  console.log(meal);

  return (
    <div className='section-wrapper'>
      <div className='container'>
        <div className='breadcrumb bg-orange text-white'>
          <ul className='flex align-center my-2'>
            <li className='breadcrumb-item'>
              <NavLink to={'/'} className='flex align-center'>
                <AiFillHome size={22} />
              </NavLink>
            </li>
            <li className='flex align-center mx-1'>
              <BiChevronsRight size={23} />
            </li>
            <li className='breadcrumb-item flex'>
              <span to="" className='fs-15 fw-5 text-uppercase'>{meal?.title}</span>
            </li>
          </ul>
        </div>

        <h2 className='sc-title'>Meal Details</h2>
        <section className='sc-details bg-white'>
          <div className='details-head grid'>
            <div className='details-img'>
              <img src={meal?.thumbnail} alt={meal?.title} className='img-cover' />
            </div>

            <div className='details-intro'>
              <h3 className='title text-orange'>{meal?.title}</h3>
              <div className='py-4 '>
                <div className='category flex align-center'>
                  <span className='text-uppercase fw-8 ls-1 my-1'>Category: &nbsp;</span>
                  <span className='text-uppercase ls-2'>{meal?.category}</span>
                </div>

                <div className='source flex align-center'>
                  <span className='fw-7'>Source: &nbsp;</span>
                  <a href={meal.source} target='_blank' rel="noopener noreferrer">
                    {meal.source ? (meal?.source).substring(0, 40) + '...' : " URL not found"}
                  </a>
                </div>

                <div className="youtube flex align-center">
                  <span className="fw-7">Youtube guide: &nbsp;</span>
                  <a href={meal.youtube} target='_blank' rel="noopener noreferrer">
                    {meal.youtube ? (meal?.youtube).substring(0, 30) + '...' : "URL not found"}
                  </a>
                </div>
              </div>

              <div className='tags flex align-start flex-wrap'>
                <h4 className='fs-16'>Tags: &nbsp;</h4>
                <ul className='flex align-center flex-wrap'>
                  {tags == null && <li className='fs-14'>No tags for this meal</li>}
                  {
                    tags?.map((tag, index) => (<li key={index} className='fs-14'>{tag}</li>))
                  }
                </ul>
              </div>

              <div className='ingredients my-5 px-3 py-3'>
                <h4 className='fs-16 text-white'>Ingredients</h4>
                <ul className='grid'>
                  {
                    meal?.ingredients?.map((ingredient, index) => (
                      <li key={index} className='flex align-center'>
                        <span className='li-dot'>{index + 1}</span>
                        <span className='text-capitalize text-white fs-15'>{ingredient}</span>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>

          <div className='details-body'>
            <div className='measures my-4'>
              <h4 className='fs-16'>Measure: </h4>
              <ul className='grid'>
                {meal?.measures?.map((measure, index) => (
                  <li key={index} className='fs-14 flex align-end'>
                    <span className='li-icon fs-12 text-orange'>
                      <FaUtensilSpoon />
                    </span>
                    <span className='li-text fs-15 fw-6 op-09'>{index + 1})&nbsp;</span>
                    <span className='li-text fs-15 fw-6 op-09'>{measure}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className='instructions my-4'>
              <h4 className='fs-16'>Instructions:</h4>
              <ul className='grid'>
                {instructions?.map((instruction, index) => (
                  <li key={index} className='fs-14'>
                    <AiOutlineCheckSquare size={18} className='text-orange li-icon'/>
                    <span className='li-text fs-16 fw-5 op-09'>{instruction}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default MealSingle;