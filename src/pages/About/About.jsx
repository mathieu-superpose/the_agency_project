import './About.scss';
import ModeContext from 'components/ModeContext/ModeContext';
import { useContext, useState, useEffect } from 'react';
import team from './img/team.png';
import teamDark from './img/teamDark.png';

const About = () => {
	const currentState = useContext(ModeContext);
	const [img, setImg] = useState();

	useEffect(() => {
    if (currentState.currentState==='Dark') setImg(teamDark);
    if (currentState.currentState!=='Dark') setImg(team);
  }, [currentState.currentState]);

  return (
      <div className='About'>
	    <h1 className='About__title'>Websitic est une Agence de communication digitale à paris ayant pour mission de vous accompagner sur vos projets digitaux.</h1>
	    <img className='About__image' src={img} alt='team of 3 developers' />
	    <p className='About__text'>De l’étape d’avant projet web au lancement effectif du site, nous somme là pour vous. Tout au long de la durée de vie de nos projets communs, nous mettons tout en oeuvre pour vous proposer des stratégies digitales efficaces et vous permettre d’atteindre vos objectifs. Laissez votre projet entre des mains dignes de confiance, ayant accompagné "PLATON", "TCar", "Solane" ou encore "Sedal" vers le sommet. Page "Works" (url /works)</p>
	  </div>
  );
};

export default About;
