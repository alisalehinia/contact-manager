import { useEffect, useState } from "react";
import getContactById from "../../services/getContactById";
import updateContact from "../../services/updateContact";
import './AddContact.css'
const EditContact = ({ history, match }) => {
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
            await updateContact(match.params.id, contact);
            history.push('/');

        } catch (error) {

        }


    }
    useEffect(() => {
        const localFetch = async () => {
            try {
                const { data } = await getContactById(match.params.id);
                setContact({ name: data.name, email: data.email })
            } catch (error) {

            }
        }
        localFetch();

    }, [])
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
            <button type="submit">save changes</button>
        </form>
    );
}

export default EditContact;