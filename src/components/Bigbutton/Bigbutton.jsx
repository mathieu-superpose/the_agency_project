import './Bigbutton.scss';
import ModeContext from 'components/ModeContext/ModeContext';
import { useContext } from 'react';

const Bigbutton = () => {

const currentState = useContext(ModeContext);
  return (
    <>
    <button onClick={currentState.setDay}>Test Day</button>
    <button onClick={currentState.setNight}>Test Night</button>
  </>
  );
};


export default Bigbutton;
