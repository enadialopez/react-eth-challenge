import React from 'react';

const Profile = ({ description = "" }) => {
    return (<>
        <div >
            <h2 className='Profile-title'> Profile </h2>
            <p className='Profile-desc'>{description}</p>
        </div>
    </>);
}

export default Profile;