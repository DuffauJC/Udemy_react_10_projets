import React from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import MainArea from "./Components/MainArea/MainArea";
import ListNotes from "./Components/ListNotes/ListNotes";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import DisplayNote from "./Components/DisplayNote/DisplayNote";


function App() {
  return (
    <Router>
      <Sidebar />

      <Switch>
        <Route exact path='/' component={ListNotes} />
        <Route exact path='/edit' component={MainArea} />
        <Route exact path='/displayNote/:id' component={DisplayNote} />
      </Switch>
    </Router>
  );
}

export default App;
