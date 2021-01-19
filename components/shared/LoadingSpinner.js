import React from 'react'

const LoadingSpinner = ({position}) => (
  <div
    className="pkz-preloader pkz-preloader_active"
    style={{
    position: position || 'fixed'
  }}>
    <div className="pkz-preloader__spinner">
      <div className="pkz-preloader__spinner__circle-clipper left">
        <div className="circle"/>
      </div>
      <div className="pkz-preloader__spinner__gap-patch">
        <div className="circle"/>
      </div>
      <div className="pkz-preloader__spinner__circle-clipper right">
        <div className="circle"/>
      </div>
    </div>
  </div>
);

export default LoadingSpinner