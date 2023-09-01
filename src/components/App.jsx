import { Component } from "react";
import { FormPhonebook } from './FormPhonebook/FormPhonebook'
import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js';
import { FilterForm } from './FilterForm/FilterForm';
import { ContactsList } from './ContactsList/ContactsList'
import React from 'react';



export class App extends Component  {
  state = {
    contacts: [],
    filter: ''
  }
  
  addContact = newContact => {
    const { name, number } = newContact;
    const isExist = this.state.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
        || contact.number === number
    );
  
    if (isExist) {
      alert(`${name} or ${number} is already in Phonebook.`);
      return;
    }

    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        { id: nanoid(), ...newContact },
      ],
    }));
  }

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  searchContact = filterContact => {
    this.setState({
      filter: filterContact,
    })
  };

  render() {
    const { contacts, filter } = this.state;
    const showList = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
    
    return (
      <div>
        <h1>Phonebook</h1>
        <FormPhonebook onAdd={this.addContact} />
        <h2>Contacts:</h2>
        <FilterForm filter={filter} onSearch={this.searchContact} />
        <ContactsList filterList={showList} deleteContact={this.deleteContact} />
      </div>
    );
  }
};
