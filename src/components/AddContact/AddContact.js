import { useState } from "react";
import addContacts from "../../services/addContactServices";
import './AddContact.css'
const AddContact = ({ history }) => {
    const [contact, setContact] = useState({ name: "", email: "" });
    const changeHandler = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    }
    const submitForm = async (e) => {
        if (!contact.name || !contact.email) {
            alert("all field mandatory!");
            return;
        }
        e.preventDefault();
        try {
            try {
                await addContacts(contact);
                setContact({ name: "", email: "" });
                history.push('/');
            } catch (error) {

            }
        } catch (error) {

        }

    }
    return (
        <form onSubmit={submitForm}>
            <div className="formControl">
                <label>name</label>
                <input type="text" name="name" value={contact.name} onChange={changeHandler} />
            </div>
            <div className="formControl">
                <label>email</label>
                <input type="text" name="email" value={contact.email} onChange={changeHandler} />
            </div>
            <button type="submit">Add Contact</button>
        </form>
    );
}

export default AddContact;