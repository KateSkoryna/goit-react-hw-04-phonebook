import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form, FormLabel, FormInput, FormButton } from './ContactForm.styled';
import PropTypes from 'prop-types';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  inputNameId = nanoid();
  inputTelId = nanoid();

  handleChanges = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <Form onSubmit={this.handleOnSubmit}>
        <FormLabel htmlFor={this.inputNameId}>Name</FormLabel>
        <FormInput
          id={this.inputNameId}
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChanges}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <FormLabel htmlFor={this.inputTelId}>Number</FormLabel>
        <FormInput
          id={this.inputTelId}
          type="tel"
          name="number"
          value={this.state.number}
          onChange={this.handleChanges}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <FormButton type="submit">Add contact</FormButton>
      </Form>
    );
  }
}

export default ContactForm;
