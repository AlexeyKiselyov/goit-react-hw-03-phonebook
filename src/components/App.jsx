import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Phonebook } from '../components/Phonebook/Phonebook';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';
import { Div, Title } from './App.styled';
// ==============================
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onAddContact = newUser => {
    const uniqUserSearch = this.state.contacts.find(
      ({ name }) => name === newUser.name
    );
    uniqUserSearch
      ? alert(`${uniqUserSearch.name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, { ...newUser, id: nanoid() }],
        }));
  };

  onDeleteContact = e => {
    const deleteById = e.target.closest('li[data-id]').dataset.id;
    const newContacts = this.state.contacts.filter(
      contact => contact.id !== deleteById
    );
    this.setState({
      contacts: newContacts,
    });
  };

  onChangeFilter = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <Div>
        <Title>Phonebook</Title>
        <Phonebook onAddContact={this.onAddContact} />

        <Title>Contacts</Title>
        <Filter onChangeFilter={this.onChangeFilter} />

        <ContactList
          contacts={contacts}
          filter={filter}
          onDeleteContact={this.onDeleteContact}
        />
      </Div>
    );
  }
}
