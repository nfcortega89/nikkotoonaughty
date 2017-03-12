import React from 'react';

export default function Card(props) {
  return (
    <div className="card pic-card">
      <div className="image">
        <img src={props.image.images.standard_resolution.url} />
      </div>
      <div className="card-details">
        
      </div>
    </div>
  )
}
