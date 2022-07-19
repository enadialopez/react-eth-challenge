import React from 'react';

const Experience = ({ experience = [{}, {}, {},{}] }) => {
    return (
        <>
            <h3 className='Experience-title'>Work Experience</h3>
            {
                experience ?
                    experience.map((job, index) => {
                        return (
                            <li key={index} className='Experience-item' >
                                <div >
                                    <p className='job-date' >{job.startDate} - {job.endDate}</p>
                                </div>
                                <div >
                                    <h5 className='job-title'>{job.jobTitle}</h5>
                                    <p className='job-company' >{job.company}</p>
                                    <p className='job-desc' >{job.jobDescription}</p>
                                </div>
                            </li>
                        )
                    })
                    :
                    <p>Loading...</p>
            }
        </>
    )
}

export default Experience;