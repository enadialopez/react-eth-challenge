import React from 'react'

const Skills = ({ skills = [{}, {}, {}] }) => {
    return (
        <>
            <h3 className='title Skills-title'>Skills</h3>
                {
                    skills.map((skill, index) => {
                        
                        return (
                            <li key={index} className='Skills-item'>
                                <p >{skill.name}</p>
                                <div >
                                    <div>{skill.percentage}</div>
                                </div>
                            </li>
                        )
                    })
                        
                }
        </>
    )
}


export default Skills;