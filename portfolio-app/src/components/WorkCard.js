import React from 'react'
import { useNavigate } from "react-router-dom";

const WorkCard = ({myData}) => {
  const navigate = useNavigate();

  const handleViewClick = () => {
    if(myData.path.startsWith('http://') || myData.path.startsWith('https://')) {
      window.open(myData.path, '_blank', 'noopener noreferrer');
    }
    else {
      navigate(myData.path);
    }
  }

  return (
    <div className="project-card">
        <img src={myData.imgsrc} className="project-img" alt="project1"/>
        <h2 className="project-title">{myData.title}</h2>
        <div className="pro-details">
            <p>{myData.text}</p>
            <div className="pro-btns">
                <button className="btn" onClick={handleViewClick}>View</button>
            </div>
        </div>
    </div>
  )
}

export default WorkCard
