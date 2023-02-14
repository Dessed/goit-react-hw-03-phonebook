import { User, Button } from '../App/App.styled';
import PropTypes from 'prop-types';

export const ContactList = ({contactsData, onDelete}) => {
    const {contacts, filter} = contactsData;
    const normalizedFilter = filter.toLowerCase();
 
    return (
        contacts.filter(contact => contact.name.toLocaleLowerCase().includes(normalizedFilter))
        .map(({ name, number, id }) => 
        (<User key={id}>
        {name}: {number}
        <Button type='Button' onClick={() => onDelete(id)}>Delete</Button>
        </User>))
    );
};


ContactList.propTypes = {
    contactsData: PropTypes.shape ({
        filter: PropTypes.string.isRequired,
    }),
    contacts: PropTypes.shape ({
        name: PropTypes.string.isRequired,
        number: PropTypes.number.isRequired,
    })
};