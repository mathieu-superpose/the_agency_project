import { useEffect } from 'react';
import { useParams } from 'react-router-dom'

const Studycase = () => {
  let { slug } = useParams();

  return (
    <h1>{slug}</h1>
  );
};

export default Studycase;
