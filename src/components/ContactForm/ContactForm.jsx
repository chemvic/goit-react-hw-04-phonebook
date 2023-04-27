import React,{Component} from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from "./ContactForm.module.css";


class ContactForm extends Component{

state={
    name: '',
    number: '',
}

handleInputChange=({ target: { name, value } }) => {
    this.setState({
        [name]: value,
    });
};


handleSubmit = (event) => {   
		  event.preventDefault();     
      this.reset();

      const newContact={
        ...this.state,
        id: nanoid()
      } 
      this.props.onSubmit(newContact);
}

reset=()=>{
this.setState({  name: '',
number: ''});
}

render(){
  const {name, number} = this.state;
    return (
  <div> 
 
    <form className={css.form} onSubmit={this.handleSubmit}>
       <label className={css.form_lable}>
       <span>Name</span>
       <input className={css.form_input}
type="text"
name="name"
value={name}
id= {123}
onChange={this.handleInputChange}
placeholder='Enter name...'
pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
title="Name may contain only letters,
 apostrophe, dash and spaces.
  For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
required
/>
    </label>
    <label className={css.form_lable}>
    <span>Number</span>
    <input className={css.form_input}
type="tel"
name="number"
value={number}
onChange={this.handleInputChange}
placeholder='Enter phone number...'
pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
required
/>
    </label>
    
    <button type="submit" className={css.button}>Add contact</button>
    </form>
      
  </div>
);
}
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

export default ContactForm;