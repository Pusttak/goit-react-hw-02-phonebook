import { ContactWrap, Name, Number, ButtonDelete } from './Contact.styled.jsx';

const Contact = ({ name, number, id, onDeleteContact }) => (
  <ContactWrap>
    <Name>{name}:</Name>
    <Number>{number}</Number>
    <ButtonDelete
      type="button"
      onClick={() => {
        onDeleteContact(id);
      }}
    >
      x
    </ButtonDelete>
  </ContactWrap>
);

export default Contact;
