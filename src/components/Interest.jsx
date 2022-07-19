import React from 'react'

const Interest = ({ interests = [[], [], []] }) => {
    return (
        <>
            <h3 className='title Interest-title'>Interests</h3>
            {
                    interests.map((interest, index) => {
                        return (
                            <li key={index} className='Interest-item'>
                                <p className='item'>{interest}</p>
                            </li>
                        )
                    })
            }
        </>
    )
}


export default Interest