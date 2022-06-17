import userImage from '../../../assets/images/profile.png'
import { Link } from 'react-router-dom';
import '../ContactList.css'
const Contact = ({ contact, onDelete }) => {
    const { name, email, id } = contact;
    return (
        <div key={id} className='item'>
            <div style={{ display: "flex", alignItems: "center" }}>
                <img src={userImage} alt="user" />
                <Link className='Link' to={{ pathname: `/user/${id}`, state: { contact: contact } }}>
                    <div className='user'>
                        <p>
                            name: {name}
                        </p>
                        <p>
                            email: {email}
                        </p>
                    </div>
                </Link>
            </div>
            <div>
                <Link to={`/edit/${id}`}>
                    <button className='editBtn' >edit</button>
                </Link>
                <button onClick={() => onDelete(id)}>delete</button>
            </div>
        </div>
    );
}

export default Contact;