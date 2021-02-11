import './Home.scss';
import { Link } from 'react-router-dom';
import ModeContext from 'components/ModeContext/ModeContext';
import { useContext, useState, useEffect } from 'react';
import webdev from './img/webdev.svg';
import webdevDark from './img/webdevDark.svg';

const Home = () => {
	const currentState = useContext(ModeContext);
	const [img1, setImg1] = useState();

	useEffect(() => {
    if (currentState.currentState==='Dark') setImg1(webdevDark);
    if (currentState.currentState!=='Dark') setImg1(webdev);
  }, [currentState.currentState]);

  return(
  	<div className='Home'>
  	  <img className='Home__webdev' src={img1} alt='2 webdevelopers' />
  	  <div className={`Home__promise ${currentState.currentState}`}>
  	    <p className='Home__promise__text'>Grâce à notre savoir-faire, notre expérience et notre écoute, nous accompagnons nos clients dans la création de site internet:</p>
	  </div>
	  <div className='Home__bloc'>
	    <h1 className='Home__bloc__title'>Confiez vos rêves à des experts du Web</h1>
		<ul className='Home__bloc__catch-group'>
		  <li className={`Home__bloc__catch-group__text ${currentState.currentState}`}>étude</li>
		  <li className={`Home__bloc__catch-group__text ${currentState.currentState}`}>UX</li>
		  <li className={`Home__bloc__catch-group__text ${currentState.currentState}`}>conception</li>
		  <li className={`Home__bloc__catch-group__text ${currentState.currentState}`}>design</li>
		  <li className={`Home__bloc__catch-group__text ${currentState.currentState}`}>développement</li>
		  <li className={`Home__bloc__catch-group__text ${currentState.currentState}`}>SEO</li>
		</ul>
		<p className='Home__bloc__text'>Notre agence web est capable de répondre à tous vos besoins et d'élaborer une véritable stratégie digitale.</p>
	  </div>
	</div>
  )
};

export default Home;
