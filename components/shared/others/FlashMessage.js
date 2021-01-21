import React, {useState} from 'react';
// import {closeMessage} from '../../../store/actions/messageAction'
import {connect} from 'react-redux'
import { useDispatch } from 'react-redux';
const mapStateToProps =({
  messageReducer: {visibility,type,message}
}) => ({
  visibility,
  type,
  message
})

const Flash = ({visibility,type,message}) => {
  const dispatch = useDispatch();
  // let [visibility, setVisibility] = useState(false);
  return (
    visibility && <div className={`alert alert-${type}`}>
      <span className="close" onClick={() => dispatch({type: 'CLOSE_MESSAGE'})}><strong>X</strong></span>
      <p>{message}</p>
    </div>
  )
}

export default (connect(mapStateToProps,null)(Flash));