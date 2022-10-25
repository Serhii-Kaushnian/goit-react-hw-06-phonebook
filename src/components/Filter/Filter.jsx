import { Form, Label, Input, ClearButton } from './Filter.styled';
import PropTypes from 'prop-types';
import { FaTrashAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { clearFilter } from '../../redux/actions.js';
export default function Filter({ filterChange, filterValue }) {
  const dispatch = useDispatch();
  const handleClearFilter = () => {
    dispatch(clearFilter());
  };

  return (
    <div>
      <Form>
        <Label>
          Find contact by name
          <Input
            onChange={filterChange}
            type="text"
            name="filter"
            value={filterValue}
          />
        </Label>
        <ClearButton onClick={handleClearFilter} type="button">
          <FaTrashAlt />
        </ClearButton>
      </Form>
    </div>
  );
}

Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  filterChange: PropTypes.func.isRequired,
};
