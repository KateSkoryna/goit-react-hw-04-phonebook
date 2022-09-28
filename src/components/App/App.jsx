import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Global } from '@emotion/react';
import { GlobalStyles } from './GlobalStyles.styled';
import { Container } from './Container.styled';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

const STORAGE_KEY = 'contact-box';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storageList = localStorage.getItem(STORAGE_KEY);
    if (storageList !== null) {
      setContacts(JSON.parse(storageList));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    return contacts.find(
      contact => newContact.name.toLowerCase() === contact.name.toLowerCase()
    )
      ? alert(`${newContact.name} is already in contacts.`)
      : setContacts(contacts => [...contacts, newContact]);
  };

  const deleteContact = id =>
    setContacts(contacts => contacts.filter(contact => contact.id !== id));

  const filterInputHandler = event => setFilter(event.currentTarget.value);

  const filterContactsOnChange = () =>
    contacts.filter(contact =>
      contact.name.toUpperCase().includes(filter.toUpperCase())
    );

  const sortContactList = () =>
    filterContactsOnChange().sort((firstContactName, secondContactName) =>
      firstContactName.name.localeCompare(secondContactName.name)
    );

  return (
    <>
      <Global styles={GlobalStyles} />
      <section>
        <Container>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={addContact} />
          <h2>Contacts</h2>
          <Filter value={filter} onChange={filterInputHandler} />
          <ContactList
            contacts={sortContactList()}
            deleteOnClick={deleteContact}
          />
        </Container>
      </section>
    </>
  );
};

export default App;
