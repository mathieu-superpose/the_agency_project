import './Works.scss';
import { Link } from 'react-router-dom';
import Data from 'components/Data/Data';
import ModeContext from 'components/ModeContext/ModeContext';

const Works = () => {
  return(
    <div className={`Works`}>
      <h1 className={`Works__title`}>Works</h1>
      <ul className={`Works__list`}>
      {
        Data.map(page =>
          <li className={`Works__list__item`}>
            <Link to={`works/${page.slug}`}>{page.title}</Link>
          </li>
        )
      }
      </ul>
    </div>
  )
};

export default Works;
