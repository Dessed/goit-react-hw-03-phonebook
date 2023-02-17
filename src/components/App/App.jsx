import { Component } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { H1, H2, DIV} from './App.styled';


export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  };
 
  componentDidMount () {
    const contacts = localStorage.getItem("PhoneBook");
    const parsedSettings = JSON.parse(contacts);

      if (parsedSettings) {
        this.setState({ contacts: parsedSettings });
      }
  };

  componentDidUpdate (prevProps, prevState) {
    const newContacts = this.state.contacts;
    const prevContacts = prevState.contacts;
    
   if (newContacts !== prevContacts) {
    localStorage.setItem("PhoneBook", JSON.stringify(newContacts));
   } 
  };

  handleFormOnSubmit = data => {
    const { contacts} = this.state;
    const { name } = data;
    
    const alertReplayNameUser = contacts.some((el) => (el.name === name));
    // const alertReplayNameUser = contacts.map(contact => contact.name).includes(name);
    
    alertReplayNameUser === true ? alert (`${name} is already in contacts.`) : 
      this.setState(({ contacts }) => ({contacts: [...contacts, data]}));
  };

  handleChange = e => {
    const {name, value} = e.currentTarget;
    this.setState({ [name]: value });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)}));
    this.removeContactStorage(contactId);
};

  removeContactStorage = contactId => {
    return (
      localStorage.setItem('PhoneBook',JSON.stringify(JSON.parse(localStorage.getItem('PhoneBook'))
      .filter((item) => item.id !== contactId)))
    );
};

  render () {
    const handleFormOnSubmit = this.handleFormOnSubmit;
    const handleChange = this.handleChange;
    const deleteContact = this.deleteContact;
    
    return (
      <DIV>
        <H1>Phonebook</H1>
        <ContactForm onFormSubmit={handleFormOnSubmit}/>
        <H2>Contacts</H2>
        <Filter filter={this.state.filter} onChange={handleChange}/>
        <ul>
        <ContactList  contactsData={this.state} onDelete={deleteContact}/>
        </ul>
      </DIV>         
        )
    };
};
    
   

