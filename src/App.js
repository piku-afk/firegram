import React, { useState } from 'react';
import Navbar from './components/Navbar';
import MainPage from './components/MainPage';
import useFirestore from './components/useFirestore';
import './App.css';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';



function App() { 
  const { docs } = useFirestore('images'); 
  const [modal, setModal] = useState(false);
  const [selected, setSelected] = useState(0);

  return (
    <div className="app">
      <Navbar />
     <Router>
      <Switch>
 
        <Route path='/' exact>
          <MainPage 
            docs={docs}
            modal={modal}
            selected={selected}
            setModal={setModal}
            setSelected={setSelected}
          />
        </Route>

        <Route path='/malik' exact>
        <MainPage 
            admin
            docs={docs}
            modal={modal}
            selected={selected}
            setModal={setModal}
            setSelected={setSelected}
          />
        </Route>
            
      </Switch>
     </Router>
    </div>
  );
}

export default App;
