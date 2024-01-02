import React from 'react';
import './keyData.css'
import PropTypes from 'prop-types';

export default function KeyData({image, value, text}) {
  return (
    <div className='keyData'>
      <div className='keyData_content'>
        <img className='keyData_img' src={image} alt='keyData_img'/>
        <div className='keyData_info'>
            <p className='keyData_value'>{value}</p>
            <p className='keyData_name'>{text}</p>
        </div>
        </div>
    </div>
  )
}

KeyData.propTypes = {
  image: PropTypes.node,
  value: PropTypes.string,
  text: PropTypes.string
}
 