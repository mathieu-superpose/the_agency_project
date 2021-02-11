import './Works.scss';
import Data from 'components/Data/Data';
import ModeContext from 'components/ModeContext/ModeContext';
import WorkCard from 'components/WorkCard/WorkCard'

const Works = () => {
  return(
    <div className={`Works`}>
      <h1 className={`Works__title`}>Quelques exemples de nos dernières réalisations:</h1>
      <ul className={`Works__list`}>
      {
        Data.map(page =>
          <li className={`Works__list__item`}>
            <WorkCard work={page}/>
          </li>
        )
      }
      </ul>
    </div>
  )
};

export default Works;
