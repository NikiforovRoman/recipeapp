import React from 'react';
import "./Category.scss";
import { NavLink } from 'react-router-dom';

const CategoryList = ({categories}) => {
  return (
    <div className='section-wrapper bg-whitesmoke'>
      <div className='container'>
        <h2 className='sc-title'>categories</h2>
        <section className='sc-category grid'>
          {
            categories.map(category => {
              const {idCategory: id, strCategory: title, strCategoryThumb: thumbnail} = category;
              return (
                <NavLink to={`/meal/category/${title}`} className='category-itm align-center justify-center' key={id}>
                  <div className='category-itm-img h-100 w-100 flex align-center justify-center'>
                    <img src={thumbnail} alt={title} />
                    <div className='category-itm-title bg-orange'>
                      <h3 className='text-white fs-11 fw-6 ls-1 text-uppercase'>{title}</h3>
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

export default CategoryList