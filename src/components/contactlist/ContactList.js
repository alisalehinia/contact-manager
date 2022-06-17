import './ContactList.css'
import Contact from './contact/Contact';
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import getContacts from '../../services/getContactsServices';
import deleteContacts from '../../services/deleteContactServices';

const ContactList = (props) => {
    const [contacts, setContacts] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [allContacts, setAllContacts] = useState([]);
    useEffect(() => {
        const fetchContacts = async () => {
            const { data } = await getContacts();
            setContacts(data);
            setAllContacts(data);
        }
        try {
            fetchContacts();
        } catch (error) {

        }
    }, [])
    const deleteContactHandler = async (id) => {
        try {
            await deleteContacts(id);
            const filterdContacts = contacts.filter((c) => c.id !== id);
            setContacts(filterdContacts);
        } catch (error) {

        }
    }
    const searchHandler = (e) => {
        setSearchTerm(e.target.value);
        const search = e.target.value;
        if (search !== "") {
            const filteredContacts = allContacts.filter((c) => {
                return Object.values(c).join(" ").toLowerCase().includes(search.toLowerCase());
            })
            setContacts(filteredContacts);

        }
        else {
            setContacts(allContacts);
        }
    }
    return (
        <section className='listWrapper'>
            <div className='contactList'>
                <div className='listHeader'>
                    <h2>contacts</h2>
                    <Link to='/add'>
                        <button>add</button>
                    </Link>
                </div>
                <div>
                    <input type="text" value={searchTerm} onChange={searchHandler} />
                </div>
                {contacts ? contacts.map((contact) => {
                    return (
                        <Contact contact={contact} onDelete={deleteContactHandler} />
                    )
                }) : <p>loading...</p>}
            </div>
        </section>
    );
}

export default ContactList;