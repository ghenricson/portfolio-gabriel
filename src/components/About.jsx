import React from 'react';
import aboutImg from "/src/assets/img/about.jpg";

const About = () => {
    return (
        <div id='about' className='max-w-4xl mx-auto md:flex md:items-center md:justify-center p-4 py-16'>
            <div className="md:w-1/2 mb-4 md:mr-8">
                <img
                    src={aboutImg}
                    alt="Bild på mig"
                    className="w-full rounded"
                />
            </div>
            <div className="md:w-1/2">
                <h1 className="text-5xl font-bold mb-4">
                    About
                </h1>
                <p className="mb-4">
                    I'm Gabriel, a 27-year-old studying to become a UX/UI designer with frontend expertise at Chasacademy.
                </p>
                <p className="mb-4">
                    Introduced to the IT industry by my friends studying frontend and UX design, I was immediately captivated by its unique creativity. Previous work in retail and my musical interest have honed my social skills and empathy with helping people, benefiting my UI/UX learning.
                </p>
                <p className="mb-4">
                    As a UX designer, I aim to help companies and individuals recognize the profound impact of good design.
                </p>
            </div>
        </div>
    );
};

export default About;






