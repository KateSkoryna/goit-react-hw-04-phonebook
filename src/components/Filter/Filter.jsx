import PropTypes from 'prop-types';
import { FilterTitle, FilterInput } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <div>
      <FilterTitle>Find contacts by name</FilterTitle>
      <FilterInput
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
        title="Search field"
        required
      />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
