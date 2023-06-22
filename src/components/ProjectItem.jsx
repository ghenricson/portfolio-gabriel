import React from 'react'

const ProjectItem = ({ img, title }) => {
    return (
        <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group'>
            <img src={img} alt="/" className='rounded-xl group hover:opacity-10' />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-3xl font-bold tracking-wider text-center'>
                    {title}
                </h3>
                <a href="/">
                    <p className='text-center p-3 rounded-lg bg-[#aecce4] text-black font-bold cursor-pointer text-lg'>More Info</p>
                </a>
            </div>
        </div>
    )
}

export default ProjectItem