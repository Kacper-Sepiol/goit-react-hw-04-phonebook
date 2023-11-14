import css from './FormPhoneBook.module.css';
import PropTypes from 'prop-types';

const ContactForm = ({
  name,
  handleChangeName,
  handleChangeNumber,
  handleSubmit,
  number,
  sName,
  inputR,
}) => (
  <form className={css.form} onSubmit={handleSubmit}>
    <label>
      Name
      <input
        ref={inputR}
        type="text"
        name="name"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChangeName}
      />
    </label>
    <label>
      Number
      <input
        type="tel"
        name="number"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleChangeNumber}
      />
    </label>

    <button type="submit" className={css.buttonAdd}>
      Add contact
    </button>
  </form>
);

export default ContactForm;

ContactForm.propTypes = {
  name: PropTypes.string.isRequired,
  handleChangeName: PropTypes.func.isRequired,
  handleChangeNumber: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  number: PropTypes.string.isRequired,
};
