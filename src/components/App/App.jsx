import useLocalStorage from '../../hooks/useLocalStorage';
import { useState } from 'react';
import ContactForm from "../ContactForm";
import  Filter from "../Filter";
import ContactList from "../ContactList";

const App =()=> {

  const[filter, setFilter] = useState('');
  const[contacts, setContacts] = useLocalStorage('contacts', [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ]);

  const formSubmitHandler=(newContact)=>{
   
    if(contacts
			.find(({name, number}) => name.toLowerCase()===(newContact.name.toLowerCase())||number===newContact.number)){
        alert(`${newContact.name} is already in contacts.`);
        return;
      }   

setContacts([...contacts, newContact])

  }

  const onDeleteContact=(contactId)=>{
        setContacts(contacts.filter(contact=>contact.id!==contactId));

      };

     const changeFilter = (event) => {
        setFilter( event.currentTarget.value );
      };
   

  const getFilteredContacts = () =>{
   
    return contacts
			.filter(({name, number}) => name.toLowerCase().includes(filter.toLowerCase())||number.includes(filter));      
  }


	
   
    
    const filteredContacts=getFilteredContacts();
    

      return (
    <div
      style={{
        padding: 30,      
        color: '#010101'
      }}
    > 
    <h1 className="title">Phonebook</h1>

    <ContactForm onSubmitHandler={formSubmitHandler}/>
     
    <h2 className="title">Contacts</h2>
       
      <Filter value={filter} onQuery={changeFilter} />

      {filteredContacts.length>0 ? <ContactList contacts={filteredContacts} onDelete={onDeleteContact}/> 
      :<p>There is no contacts by query</p>}    

    </div>
  );
  

};
export default App;