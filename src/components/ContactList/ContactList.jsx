import { useEffect } from 'react';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { delContact } from 'redux/operations';
import { getContacts, getFilter } from 'redux/selectors';
import { getIsLoading, getError } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import css from './ContactList.module.css';
import Layout from 'components/Layout/Layout';

const getVisibleContacts = (contacts, filter) => {
  if (!filter) {
    return contacts;
  } else {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  }
};

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(contacts, filter);

  const dispatch = useDispatch();
  const handleDelete = id => dispatch(delContact(id));
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={css.wraperContactList}>
      <Layout />
      <h2> Contacts</h2>
      <Filter />
      {isLoading && !error && <Loader />}
      <ul className={css.contactList}>
        {visibleContacts.map((contact, id) => (
          <li key={id} className={css.contactListItem}>
            {contact.name}: {contact.phone}
            <button
              type="button"
              className={css.contactListItemBtn}
              onClick={() => handleDelete(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ContactList;
