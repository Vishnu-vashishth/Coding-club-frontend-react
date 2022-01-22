import React from 'react';

const MemberCard = (props) => {
    const { avatar_url, login } = props.user;
    return (
        <div className='membercard'>
            <div className="membercard-img">
                <img src={avatar_url} alt="" />
            </div>
            <h3>{login.toUpperCase()}</h3>
            <div>
                <h4>semester-3rd</h4>
                <h6>Club member</h6>
            </div>


        </div>)
        ;
};

export default MemberCard;
