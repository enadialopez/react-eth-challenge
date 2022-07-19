import React from 'react';

const Academic = ({ academic = [{}, {}, {}] }) => {
    return (
        <>
            <h3 className='Academic-title'>Education</h3>
            {
                academic.map((degree, index) => {
                        return (
                            <li key={index} className='Academic-item'>
                                <div >
                                    <p className='degree-date' >{degree.startDate} - {degree.endDate}</p>
                                </div>
                                <div >
                                    <h5 className='degree-title'>{degree.degree}</h5>
                                    <p className='degree-company' >{degree.institution}</p>
                                    <p className='degree-desc'>{degree.description}</p>
                                </div>
                            </li>
                        )
                    })
            }
        </>
    )
}

export default Academic;