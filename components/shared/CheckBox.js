import React from 'react'
const CheckBox = ({ type = 'checkbox', name, className, data, value, checked = false, handleCheckBox })  => {
    return (
        <div className={`post_ad__price__checkbox ${className}`}>
          <input key={value} name={name} onChange={handleCheckBox} type={type} checked={checked} value={value} />
          <p className="post_ad__par">{name}</p>
        </div>
  
    )
}


export default CheckBox
