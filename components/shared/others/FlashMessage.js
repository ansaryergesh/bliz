import React, {useState} from 'react';


export const Flash = (props) => {
  // let [visibility, setVisibility] = useState(false);
  return (
    props.visibility && <div className={`alert alert-${props.type}`}>
      <span className="close"><strong>X</strong></span>
      <p>{props.message}</p>
    </div>
  )
}