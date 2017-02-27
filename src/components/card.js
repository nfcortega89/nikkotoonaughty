import React from 'react';

export default function Card(props) {
  return (
    <div className="image-container">
      <img src={props.image.images.standard_resolution.url} />
    </div>
  )
}
