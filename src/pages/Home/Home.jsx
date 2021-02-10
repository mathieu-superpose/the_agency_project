import './Home.scss';
import { Link } from 'react-router-dom';

const Home = () => {
  return(
  	<div className='Home'>
	    <h1 className='Home__title'>Confiez vos rêves à des experts du Web</h1>
	    <p className='Home__text'>Grâce à notre savoir-faire, notre expérience et notre écoute, nous accompagnons nos clients dans la création de site internet:</p>
		<p className='Home__catch-text'>étude, UX, conception, design, développement, SEO</p>
		<div>
		  <Link to="/works">
		    <button className='Home__cta-button bouncy logoImage'>Voir nos projets</button>
		  </Link>
		</div>
		<p className='Home__text'>Notre agence web est capable de répondre à tous vos besoins et d'élaborer une véritable stratégie digitale.</p>
	</div>
  )
};

export default Home;
