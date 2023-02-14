import PropTypes from 'prop-types';
import { Label, Name,  Input } from '../App/App.styled';

export const Filter = ({filter, onChange}) => {
    return (
        <Label>
            <Name>Find contacts by name</Name>
          <Input
              type="text"
              name="filter"
              value={filter}
              onChange={onChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              required/>
        </Label> 
    );
};


Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onchange: PropTypes.string.isRequired,
};