import React from 'react';
import { nanoid } from 'nanoid';
import { Formik, Field } from 'formik';
import {
  FormBox,
  FormLabel,
  FormInput,
  FormButton,
} from './ContactForm.styled';
import PropTypes from 'prop-types';

const ContactForm = ({ onSubmit }) => {
  const inputNameId = nanoid();
  const inputTelId = nanoid();

  const initualValues = {
    name: '',
    number: '',
  };

  const handleOnSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik initialValues={initualValues} onSubmit={handleOnSubmit}>
      <FormBox>
        <FormLabel htmlFor={inputNameId}>Name</FormLabel>
        <Field
          id={inputNameId}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          as={FormInput}
          required
        />
        <FormLabel htmlFor={inputTelId}>Number</FormLabel>
        <Field
          id={inputTelId}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          as={FormInput}
          required
        />
        <FormButton type="submit">Add contact</FormButton>
      </FormBox>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
