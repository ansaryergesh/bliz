import React from 'react'

const LoadingSpinner = ({position}) => (
  <div
    className="bliz bliz_active"
    style={{
    position: position || 'fixed'
  }}>
    <div className="bliz__spinner">
      <div className="bliz__spinner__circle-clipper left">
        <div className="circle"/>
      </div>
      <div className="bliz__spinner__gap-patch">
        <div className="circle"/>
      </div>
      <div className="bliz__spinner__circle-clipper right">
        <div className="circle"/>
      </div>
    </div>
  </div>
);

export default LoadingSpinner