import React,{useEffect,useState} from 'react';
import Card from './Card';

function OurTeam() {
  const [userData, setuserData] = useState([]);
  useEffect(async() => {

  const userData = await fetch('https://api.github.com/users?since=135');
  const data = await userData.json();
  setuserData(data);
  console.log(data);
},[]);




  return (
        <div className="ourteam">
            <h1>OUR TEAM HEADS</h1>
            <div className='cards-container'>
              {
                userData.slice(7,16).map((val)=>{
                    return <Card user = {val}/>
                })
              }

            </div>
        </div>

  );
}

export default OurTeam;
