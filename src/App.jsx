import './App.scss';
import { useState } from 'react';
import ModeContext from 'components/ModeContext/ModeContext';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from 'components/Navbar/Navbar';
import Home from 'pages/Home/Home';
import About from 'pages/About/About';
import Works from 'pages/Works/Works';

function App() {
  const [currentState, setCurrentState] = useState('');
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
            <Route path="/works">
              <Works />
            </Route>
          </Switch>
        </main>
      </Router>
        <p>Coucou App</p>
      </div>
    </ModeContext.Provider>
  );
}

export default App;
