import React from 'react';
import Logos from './Logos';

function Card(props) {
  // console.log(props.user.avatar_url)
  const {avatar_url,login} = props.user;
  return (
  <div className='card'>
     <div className="card-img">
       <img src={avatar_url} alt="" />
     </div>
       <h2>{login.toUpperCase()}</h2>
       <div>
       <h3>SDIET coding club</h3>
       <h5>Web Development Head</h5>
       </div>
       
       <Logos/>
  </div>);
}

export default Card;
