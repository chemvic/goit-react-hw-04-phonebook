import PropTypes from 'prop-types';
import css from "./Contact.module.css";

const Contact=({name, number, id, onDelete})=>{

    return(
        <>  
              <li className={css.contact_item}>{name}: {number}
              <button type="button" className={css.button} onClick={() => onDelete(id)} >Delete</button>
              </li>
              						
        </>
 
    )
}

Contact.propTypes={
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onDelete:PropTypes.func.isRequired
}

export default Contact;