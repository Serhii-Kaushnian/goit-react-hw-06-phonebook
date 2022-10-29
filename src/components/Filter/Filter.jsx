import { Form, Label, Input, ClearButton } from './Filter.styled';

import { FaTrashAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts, clearFilter } from 'redux/slice';

export default function Filter() {
  const contactslist = useSelector(state => state.contactslist);

  const dispatch = useDispatch();
  const handleClearFilter = () => {
    dispatch(clearFilter());
  };
  const handleFilter = e => {
    dispatch(filterContacts(e.currentTarget.value));
  };
  return (
    <div>
      <Form>
        <Label>
          Find contact by name
          <Input
            onChange={handleFilter}
            type="text"
            name="filter"
            value={contactslist.filter}
          />
        </Label>
        <ClearButton onClick={handleClearFilter} type="button">
          <FaTrashAlt />
        </ClearButton>
      </Form>
    </div>
  );
}
