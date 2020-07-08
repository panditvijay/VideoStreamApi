import React from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom'; 

import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import signin from './components/user/signin'
import signup from './components/user/signup'
import logout from './components/user/Logout'
import AddStreamInfo from './components/videoStream/AddStreamInfo'
import EditStreamInfo from './components/videoStream/EditStreamInfo'



function App() {
  return (
    <Router>
     
      <Route path="/" exact component={signin} />
      <Route path="/signup" component={signup}/>
      <Route path="/dashboard" component={Dashboard}/>
      <Route path="/logout" component={logout}/>
      <Route path="/addstream" component={AddStreamInfo}/>
      <Route path="/edit/:id" component={EditStreamInfo}/>
      
      
    </Router>
  );
}

export default App;
