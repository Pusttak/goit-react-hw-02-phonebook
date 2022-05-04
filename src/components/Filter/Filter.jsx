import css from 'components/Filter/Filter.module.css';

const Filter = ({ onChange, filterValue }) => (
  <label className={css.label}>
    Find contacts by name
    <input
      className={css.filter}
      type="text"
      name="filter"
      onChange={onChange}
      value={filterValue}
    />
  </label>
);

export default Filter;
