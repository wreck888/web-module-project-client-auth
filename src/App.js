import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import Logout from './components/Logout';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
    <div className="App">
        <header>
            <Link to="/login">Login</Link>

            <Link to="/friendslist">Friends List</Link>
         
            <Link to="/addfriend">Add Friend</Link>
       
            <Link to="/logout">Logout</Link>
        
        </header>
      <h2>Friends List App</h2>
      <Switch>
      <Logout path="/logout" component={Logout} />
      <PrivateRoute path="/addfriend"component={AddFriend}/>  
      <PrivateRoute path="/friendslist"component={FriendsList}/>
      <Login path="/login" component={Login}/>
      <Login path="/" component={Login}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
