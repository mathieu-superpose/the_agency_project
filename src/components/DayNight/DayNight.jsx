import './DayNight.scss';
import ModeContext from 'components/ModeContext/ModeContext';
import { useContext } from 'react';

const DayNight = () => {

const currentState = useContext(ModeContext);
  return (
    <>
      <input type="checkbox" onClick={currentState.setNight} checked={currentState!==""} name="checkbox1" id="toggle-box-checkbox" />
    </>
  );
};


export default DayNight;
