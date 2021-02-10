import { Link } from 'react-router-dom';

const Works = () => {
  return(
    <div>
    <h1>Works</h1>
      <Link to="works/platon-study-case">Platon</Link>
      <Link to="works/solane-study-case">Solane</Link>
      <Link to="works/sedal-study-case">Sedal</Link>
    </div>
  )
};

export default Works;
