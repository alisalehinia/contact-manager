
import './App.css';
import AddContact from './components/AddContact/AddContact';
import ContactList from './components/contactlist/ContactList';
import { Switch, Route, Link } from 'react-router-dom';
import ContactDetail from './components/ContactDetail/ContactDetail';

import EditContact from './components/EditContact/EditContact'

function App() {

  return (
    <main className="App">
      <h1>contact App</h1>
      <Switch>
        <Route path="/edit/:id" component={EditContact} />
        <Route path="/user/:id" component={ContactDetail} />
        <Route path='/add' component={AddContact} />
        <Route path='/' exact={true} component={ContactList} />

      </Switch>
    </main>
  );
}

export default App;
