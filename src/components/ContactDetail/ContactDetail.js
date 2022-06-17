import { Link } from "react-router-dom";

const ContactDetail = ({ location }) => {
    const { contact } = location.state;
    return (
        <div>
            <p>username is : {contact.name}</p>
            <p>email is : {contact.email}</p>
            <Link to="/">go to contact list</Link>
        </div>
    );
}

export default ContactDetail;