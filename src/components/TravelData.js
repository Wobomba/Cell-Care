// TravelData.jsx

import React from 'react';
import './TravelStyles.css';

class TravelData extends React.Component {
  render() {
    return (
      <div className={`country-item ${this.props.className}`}>
        <a href={this.props.link} target="_blank" rel="noopener noreferrer">
          <div className="image-container">
            <img alt="img" src={this.props.img1} className="image" />
            <div className="overlay">
              <div className="country-details">
                <h2>{this.props.heading}</h2>
              </div>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default TravelData;
