import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Global } from '@emotion/react';
import { GlobalStyles } from './GlobalStyles.styled';
import { Container } from './Container.styled';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

const STORAGE_KEY = 'contact-box';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const storageList = localStorage.getItem(STORAGE_KEY);
    if (storageList !== null) {
      this.setState({
        contacts: JSON.parse(storageList),
      });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state.contacts));
    }
  }

  addContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    const { contacts } = this.state;

    contacts.find(
      contact => newContact.name.toLowerCase() === contact.name.toLowerCase()
    )
      ? alert(`${newContact.name} is already in contacts.`)
      : this.setState(({ contacts }) => ({
          contacts: [newContact, ...contacts],
        }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  filterInputHandler = event => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };

  filterContactsOnChange = () => {
    const { contacts, filter } = this.state;
    const capitalFilter = filter.toUpperCase();
    return contacts.filter(contact =>
      contact.name.toUpperCase().includes(capitalFilter)
    );
  };

  sortContactList = () => {
    return this.filterContactsOnChange().sort(
      (firstContactName, secondContactName) =>
        firstContactName.name.localeCompare(secondContactName.name)
    );
  };

  render() {
    const filteredList = this.sortContactList();

    return (
      <>
        <Global styles={GlobalStyles} />
        <section>
          <Container>
            <h1>Phonebook</h1>
            <ContactForm onSubmit={this.addContact} />
            <h2>Contacts</h2>
            <Filter
              value={this.state.filter}
              onChange={this.filterInputHandler}
            />
            <ContactList
              contacts={filteredList}
              deleteOnClick={this.deleteContact}
            />
          </Container>
        </section>
      </>
    );
  }
}

export default App;
