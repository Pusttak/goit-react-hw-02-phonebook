import Contact from 'components/Contact';
import css from 'components/ContactList/ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={css.list}>
    {contacts.length ? (
      contacts.map(({ name, number, id }) => (
        <li key={id}>
          <Contact
            name={name}
            number={number}
            id={id}
            onDeleteContact={onDeleteContact}
          />
        </li>
      ))
    ) : (
      <p>Phonebook is empty</p>
    )}
  </ul>
);

export default ContactList;
