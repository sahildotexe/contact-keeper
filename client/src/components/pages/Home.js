import React, { useContext, useEffect } from 'react'
import ContactForm from '../contacts/ContactForm'
import Contacts from '../contacts/Contacts'
import ContactFilter from '../contacts/ContactFilter'
import authContext from '../../context/auth/authContext'

function Home() {

   const AuthContext = useContext(authContext);

   useEffect(() => {
       AuthContext.loadUser();
       //eslint-disable-next-line
   },[]);

    return (
        <div className="grid-2">
            <div>
                <ContactForm />
            </div>
            <div>
                <ContactFilter />
                <Contacts />
            </div>
        </div>
    )
}

export default Home
