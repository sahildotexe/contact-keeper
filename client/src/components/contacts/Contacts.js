import React,{Fragment,useContext, useEffect} from 'react';
import contactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';
import Spinner from '../Layout/Spinner';

function Contacts() {
    const ContactContext = useContext(contactContext);

    const {contacts, filtered,getContacts, loading} = ContactContext;

    useEffect(() => {
      getContacts();
      //eslint-disable-next-line
    },[])
    
    if(contacts !== null && contacts.length === 0){
      return <h4>Please add a contact</h4>
    }

    return (
        <Fragment>
          {contacts !== null && !loading ? (<Fragment>
          {filtered !==null ? filtered.map(contact =>  (<ContactItem key={contact.id} contact={contact}/>))
          : contacts.map(contact => (
            <ContactItem key={contact.id} contact={contact}/> ))
        }

        </Fragment>) : <Spinner /> }
          
        </Fragment>
    )
}

export default Contacts
