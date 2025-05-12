import React from 'react';
import '../card.css';

const Card = ({ 
  title, 
  description, 
  content, 
  noPadding = false 
}) => {
  return (
    <div className="card h-100">
      <div className="card-body" style={noPadding ? {padding: 0} : {}}>
        {title && <h5 className="card-title">{title}</h5>}
        {description && <p className="card-text">{description}</p>}
        {content && content}
      </div>
    </div>
  );
};

export default Card;
