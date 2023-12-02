import React from 'react'

const LandingPage = () => {
  return (
    <div>
        <section className='candidate-details'>
            <h3>Name: Rohan</h3>
            <h3> Degree Passout year: Aug-2023</h3>
            <h3>I am familiar with these technologies and have made various projects using :</h3> 
            <p className='skills'>
                <li className='skills-list-left'>
                    <ul>html</ul>
                    <ul>Javascript</ul>
                    <ul>React</ul>
                    <ul>Css</ul>
                    <ul>Bootstrap</ul>
                </li>

                <li className='skills-list-right'>
                    <ul>NodeJS</ul>
                    <ul>Mongodb</ul>
                    <ul>Mysql</ul>
                    <ul>ExpressJs</ul>
                    <ul>Typescript</ul>
                    <ul>State management using contextAPI or Redux</ul>
                    <ul>For testing Jest</ul>
                </li>
            </p>           
        </section>
    </div>
  )
}

export default LandingPage