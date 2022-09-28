import PropTypes from 'prop-types';
import {
  ContactListBox,
  ContactListItem,
  ContactListBtn,
  ContactListText,
} from './ContactList.styled';

const ContactList = ({ contacts, deleteOnClick }) => {
  return (
    <ContactListBox>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem key={id}>
          <ContactListText>Name: {name}</ContactListText>
          <ContactListText>Number: {number}</ContactListText>
          <ContactListBtn
            type="button"
            onClick={() => {
              deleteOnClick(id);
            }}
          >
            Delete contact
          </ContactListBtn>
        </ContactListItem>
      ))}
    </ContactListBox>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteOnClick: PropTypes.func.isRequired,
};

export default ContactList;
