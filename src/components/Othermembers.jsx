import React,{useEffect,useState} from 'react';
import MemberCard from './MemberCard'
const Othermembers = () => {

    const [memberData, setmemberData] = useState([]);
  useEffect(async() => {

  const memberData = await fetch('https://api.github.com/users?since=135');
  const data = await memberData.json();
  setmemberData(data);
//   console.log(data);
},[]);


return (
        <div className="othermember">
            <h1>OUR CLUB MEMBERS</h1>
            <div className='cards-container'>
              {
                memberData.slice(1,30).map((val)=>{
                    return <MemberCard user = {val}/>
                })
              }

            </div>
        </div>

  );
};

export default Othermembers;
