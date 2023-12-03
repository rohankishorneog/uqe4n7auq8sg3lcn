import React from 'react'
import "./LandingPage.css"
import Resume from '../../Components/Resume/Resume'

const LandingPage = () => {
    return (
        <div className='Landing-page-main'>


            {/* section for candidate details */}

            <section className='candidate-details'>
                <h3>Name: Rohan</h3>
                <h3> Degree Passout year: Aug-2023</h3>
                <h3>I am familiar with these technologies and have made various projects using :</h3>
                <p className='skills'>
                    <ul className='skills-list-left'>
                        <li>HTML</li>
                        <li>Javascript</li>
                        <li>React</li>
                        <li>CSS</li>
                        <li>Bootstrap</li>
                        <li>Git and GitHub</li>
                        <li>Java</li>
                    </ul>

                    <ul className='skills-list-right'>
                        <li>NodeJS</li>
                        <li>Mongodb</li>
                        <li>Mysql</li>
                        <li>ExpressJs</li>
                        <li>Typescript</li>
                        <li>Context API or Redux</li>
                        <li>For testing Jest</li>
                    </ul>
                </p>
            </section>


            
            {/* section for Download link to resume */}
            <Resume/>
        </div>
    )
}

export default LandingPage