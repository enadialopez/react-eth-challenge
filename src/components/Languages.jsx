import React from 'react';

const Languages = ({ languages = [{}, {}, {}] }) => {
    return (
        <>
            <h3 className='Languages-title'>Languages</h3>
            {
                    languages.map((language, index) => {
                        return (
                            <li key={index} className='Languages-item' >
                                <p >{language.name}</p>
                                <div >
                                    <div>{language.percentage}</div>
                                </div>
                            </li>
                        )
                    })
            }
        </>
    )
}

export default Languages;