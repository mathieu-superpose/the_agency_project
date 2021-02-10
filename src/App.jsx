import './App.scss';
import { useState,useEffect } from 'react';
import ModeContext from 'components/ModeContext/ModeContext';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from 'components/Navbar/Navbar';
import Home from 'pages/Home/Home';
import About from 'pages/About/About';
import Works from 'pages/Works/Works';
import Studycase from 'components/Studycase/Studycase';

function App() {
  const [currentState, setCurrentState] = useState(localStorage.getItem("TheAgencyState") || "");
  const saveState = () => {
    localStorage.setItem("TheAgencyState",currentState)
  };

  useEffect(() => {saveState()}, [currentState]);

  return (
    <ModeContext.Provider value={{
        currentState,
        setDay: () => setCurrentState(''),
        setNight: () => setCurrentState('Dark')
      }}>
      <div className={`App App--${currentState}`}>
        <Router>
        <Navbar />
        <main>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/works" exact>
              <Works />
            </Route>
            <Route path="/works/:slug" exact>
              <Studycase />
            </Route>
          </Switch>
        </main>
      </Router>
      </div>
    </ModeContext.Provider>
  );
}

export default App;
