import React, { useState } from 'react';
import "./Header.scss";
import { BsSearch } from 'react-icons/bs';
import { useMealContext } from '../../context/mealContext';
import { useNavigate } from 'react-router-dom';
import { startFetchMealsBySearch } from '../../actions/mealsActions';

const SearchForm = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const { dispatch, meals } = useMealContext();

  const handleSearchTerm = (evt) => {
    evt.preventDefault();
    if((evt.target.value.replace(/[^\w\s]/gi, "")).length !== 0) {
      setSearchTerm(evt.target.value);
      setErrorMsg("");
    } else {
      setErrorMsg("Invalid search term... ");
    }
  }

  const handleSearchResult = (evt) => {
    evt.preventDefault();
    navigate('/');
    startFetchMealsBySearch(dispatch, searchTerm);
  }

  return (
    <form className='search-form flex align-center' onSubmit={(evt) => handleSearchResult(evt)}>
      <input type='text' className='form-control-input text-dark-gray fs-15' onChange={(evt) => handleSearchTerm(evt)} placeholder='Search recipes here...' />
      <button type='submit' className='form-submit-btn text-white text-uppercase fs-14'>
        <BsSearch className='btn-icon' size={20} />
      </button> 
    </form>
  )
}

export default SearchForm;