import { Input, Label } from 'Components/ContactForm/ContactForm.styled.';
import { FilterContainer } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(state => state.filter.filterData);
  const handleFilter = evt => {
    dispatch(setFilter(evt.currentTarget.value));
  };

  const dispatch = useDispatch();
  return (
    <FilterContainer>
      <Label>Find contact by name</Label>
      <Input type="text" value={filter} onChange={handleFilter}></Input>
    </FilterContainer>
  );
};
