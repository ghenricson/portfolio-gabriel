import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-4">
            <div className="container mx-auto text-center">
                <a href="mailto:din@email.com">gabriel.henricson@gmail.com</a>
                <p>Stockholm</p>
                <p>+46 12 345 67 85</p>
                <div className="flex justify-center mt-4">
                    <a href="https://github.com/ghenricson" target="_blank" rel="noopener noreferrer" className="text-white mx-4 hover:text-gray-300">
                        <FaGithub className='cursor-pointer' size={20} />
                    </a>
                    <a href="https://linkedin.com/in/gabriel-henricson-58b10b21b" target="_blank" rel="noopener noreferrer" className="text-white mx-4 hover:text-gray-300">
                        <FaLinkedinIn className="cursor-pointer" size={20} />
                    </a>
                    {/* Lägg till ikon för e-post */}
                    <a href="mailto:gabriel.henricson@gmail.com" className="text-white mx-4 hover:text-gray-300">
                        <AiOutlineMail className="cursor-pointer" size={20} />
                    </a>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
