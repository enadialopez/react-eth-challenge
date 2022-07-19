import React from 'react';

const Header = ({ data = [{}] }) => {
    return (
        <>
            <div>
                <img src={data.avatar}></img>
            </div>
            <div >
                <h1 className='Header-title'>{data.name}</h1>      
            </div>
        </>
    )
}

export default Header;