import React from 'react';
import PropTypes from 'prop-types';
import css from "./Filter.module.css";

const Filter =({value, onQuery})=>{

        
    return(
        <label className={css.filter_lable}>
            <span>Find contacts by name or number</span>
        <input className={css.filter_input}
        type="text" 
        value={value}
        onChange={onQuery}
        placeholder='Enter name or number for search ...'
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters,
         apostrophe, dash and spaces.
          For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
        </label>
    )

}

Filter.propTypes = {
    onQuery: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
    }

export default Filter;