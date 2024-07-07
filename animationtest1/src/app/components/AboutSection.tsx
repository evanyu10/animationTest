"use client"

import React, {useTransition, useState} from 'react';
import Image from 'next/image';
import headshotImage from '../../../public/images/headshotpic.png';
import TabButton from './TabButton';
import { title } from 'process';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul>
                <li>Node.js</li>
                <li>NextJS</li>
                <li>React</li>
                <li>VueJS</li>
                <li>Bulma</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul>
                <li>Grand Valley State University:</li>
                <li>B.S. in Computer Information Systems (In progress)</li>  
            </ul>
        )
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul>
                <li>MESA Enterprises: Software Engineer Intern</li>
                <li>CompanionAI (GVSU Capstone): Full Stack Developer</li>
                <li>GVSU: STEM Summer Counselor</li>
            </ul>
        )
    }
];
const AboutSection = () => {
    const [tab, setTab] = useState('skills');
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (tabName: string) => {
        startTransition(() => {
            setTab(tabName);
        });
    }
    return (
        <section id="about" className="">
            <div className='flex flex-col md:flex-row items-center px-4 py-8 xl:gap-16 sm:py-16 xl:px-16'>
                <div className='md:w-1/2 md:mr-8'>
                    <Image src={headshotImage} alt='Headshot' width={300} height={500}/>
                </div>
                <div className='md:w-1/2 mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className="text-4xl font-bold mb-4">About Me</h2>
                    <p className="text-base lg:text-lg" > I am an aspiring software developer with a background in computer science. 
                        I have a passion for web development and I am always looking for new technologies to learn. 
                
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton 
                            setTab={() => handleTabChange('skills')} 
                            active={tab === 'skills'}> 
                            {" "}
                            Skills{" "}
                        </TabButton>
                        <TabButton 
                            setTab={() => handleTabChange('education')} 
                            active={tab === 'education'}> 
                            {" "}
                            Education{" "}
                        </TabButton>
                        <TabButton 
                            setTab={() => handleTabChange('experience')} 
                            active={tab === 'experience'}> 
                            {" "}
                            Experience{" "}
                        </TabButton>
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab)?.content}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
