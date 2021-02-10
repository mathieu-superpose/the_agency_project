import { Link } from 'react-router-dom';
import Data from 'components/Data/Data';

const Works = () => {
  return(
    <div>
    <h1>Works</h1>
    <ul>
      {
        Data.map(page =>
          <li>
            <Link to={`works/${page.slug}`}>{page.title}</Link>
          </li>
        )
     }
   </ul>

    </div>
  )
};

export default Works;
