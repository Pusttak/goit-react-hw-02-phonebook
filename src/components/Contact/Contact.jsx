import css from 'components/Contact/Contact.module.css';

const Contact = ({ name, number, id, onDeleteContact }) => (
  <p className={css.contact}>
    <span className={css.name}>{name}:</span>
    <span className={css.number}>{number}</span>
    <button
      type="button"
      onClick={() => {
        onDeleteContact(id);
      }}
      className={css.button__delete}
    >
      x
    </button>
  </p>
);

export default Contact;
