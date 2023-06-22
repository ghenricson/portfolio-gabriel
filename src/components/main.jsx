import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import heroImg from "/src/assets/img/hero.jpg"


const Main = () => {
    return (
        <div id='Main'>
            <img className="w-full h-screen object-cover object-left scale-x-[-1]" src={heroImg} alt="hero-pic" />
            <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
                <div className='max-w-[800px] m-auto h-full w-full flex flex-col justify-center items-start items-center'>
                    <h1 className='sm:text-8xl text-5xl font-bold text-gray-900'>I'm Gabriel</h1>
                    <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>
                        I'm a
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'UX/UI Designer',
                                2000, // wait 1s before replacing "Mice" with "Hamsters"
                                'React Developer',
                                2000,
                                'Musician',
                                2000,
                                'Watch and Tech Enthusiast',
                                1000
                            ]}
                            wrapper="div"
                            cursor={true}
                            speed={50}
                            style={{ fontSize: '1em', paddingLeft: '5px' }}
                            repeat={Infinity}
                        />
                    </h2>
                    <div className='flex justify-between pt-7 max-w-[200px] w-full'>
                        <a href="https://github.com/ghenricson" target="_blank" rel="noopener noreferrer">
                            <FaGithub className='cursor-pointer' size={30} />
                        </a>
                        <a href="mailto:gabriel.henricson@gmail.com">
                            <AiOutlineMail className="cursor-pointer" size={30} />
                        </a>
                        <a href="https://linkedin.com/in/gabriel-henricson-58b10b21b" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn className="cursor-pointer" size={30} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Main
