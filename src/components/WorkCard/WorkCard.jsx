import React from "react";
import { Link } from 'react-router-dom';
import "./WorkCard.scss";

const WorkCard = ({ work }) => {
    return (
        <Link to={`works/${work.slug}`}>
          <div className='WorkCard'>
            <div className='WorkCard__stamp-wrap'>
              <p className='WorkCard__stamp-wrap__stamp'>{work.title[0]}</p>
            </div>
            <Link to={`works/${work.slug}`}>{work.title}</Link>
          </div>
        </Link>
    );
}

export default WorkCard;
