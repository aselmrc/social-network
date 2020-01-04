import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

// let SomeComponent = () => <Dialogs />
function App(props) {
  return (

      <div className="app-wrapper">
        <Header />
        <Navbar />
          <div className='app-wrapper-content'>
            <Route exact path='/dialogs' 
                         render={ () => <DialogsContainer /> }/>
            <Route path='/profile'  
                        render={ () => <Profile /> } />
            <Route path='/news' component={News} />
            <Route path='/music' component={Music} />
            <Route path='/settings' component={Settings} />
              <Route path='/users'
                     render= { () => <UsersContainer />} />
          </div>
      </div>
  );
}

export default App;
