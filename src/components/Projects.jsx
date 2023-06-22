import React from 'react'
import ProjectItem from './ProjectItem'
import spotifyImg from '../assets/img/spotify.jpg'
import cookwiseImg from '../assets/img/cookwise.png'


const Projects = () => {
    return (
        <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-5xl font-bold text-center'>Projects</h1>
            <p className='text-center py-8'>Welcome to my projects page, showcasing my UX/UI design work. Explore my collection of projects, each with unique stories and challenges. I prioritize usability and create visually appealing interfaces. Discover problem-solving approaches, wireframes, prototypes, and final designs. Feel inspired and reach out for collaborations!</p>
            <div className='grid sm:grid-cols-2 gap-12'>
                <ProjectItem img={spotifyImg} title='Spotify Accessibility' />
                <ProjectItem img={cookwiseImg} title='Smart-oven App' />

            </div>
        </div>
    )
}

export default Projects