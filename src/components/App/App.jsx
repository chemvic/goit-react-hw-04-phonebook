import React,{Component} from 'react';
import ContactForm from "../ContactForm";
import  Filter from "../Filter";
import ContactList from "../ContactList";

class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  }

  componentDidMount() { 
    const savedContacts=JSON.parse(localStorage.getItem("Contacts"));    
    if(savedContacts){
      this.setState({contacts:savedContacts});
    }
   }

 componentDidUpdate(_, prevState) {
  const{contacts}=this.state;
 if(contacts!==prevState.contacts){
  localStorage.setItem("Contacts",JSON.stringify(contacts));
 }
 } 

  formSubmitHandler=(newContact)=>{
    const{contacts}=this.state;
    if(contacts
			.find(({name, number}) => name.toLowerCase()===(newContact.name.toLowerCase())||number===newContact.number)){
        alert(`${newContact.name} is already in contacts.`);
        return;
      }   

this.setState((state)=>({
 contacts: [...state.contacts, newContact]
}));
  }

   onDeleteContact=(contactId)=>{
        this.setState(prevState=>({contacts:prevState.contacts.filter(contact=>contact.id!==contactId),}));

      };

      changeFilter = (event) => {
        this.setState({ filter: event.currentTarget.value });
      };
   

  getFilteredContacts = () =>{
    const{contacts, filter}=this.state;
    return contacts
			.filter(({name, number}) => name.toLowerCase().includes(filter.toLowerCase())||number.includes(filter));      
  }


	
  render(){    
    
    const filteredContacts=this.getFilteredContacts();
    const{filter}=this.state;

      return (
    <div
      style={{
        padding: 30,      
        color: '#010101'
      }}
    > 
    <h1 className="title">Phonebook</h1>

    <ContactForm onSubmit={this.formSubmitHandler}/>
     
    <h2 className="title">Contacts</h2>
       
      <Filter value={filter} onQuery={this.changeFilter} />

      {filteredContacts.length>0 ? <ContactList contacts={filteredContacts} onDelete={this.onDeleteContact}/> 
      :<p>There is no contacts by query</p>}    

    </div>
  );
  }

};
export default App;