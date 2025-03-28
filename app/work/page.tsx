'use client'

import { motion } from 'framer-motion';
import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs'
import WorkSliderBtns from "../../components/WorkSliderBtns";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from '../../components/ui/tooltip'

import Link from 'next/link';
import Image from 'next/image';
import { Description } from '@radix-ui/react-dialog';

const projects = [
    {
        num: "01",
        category: "frontend",
        title: "project 1",
        description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Ducimus dolor officia, sapiente voluptatum labore fuga!`,
        stack: [
            { name: "HTML 5" },
            { name: "CSS 3" },
            { name: "JavaScript" },
        ],
        name: "JavaScript",
        image: '/assets/work/thumb1.png',
        live: "",
        github: "",
    },
    {
        num: "02",
        category: "Machine Learning",
        title: "project 2",
        description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Ducimus dolor officia, sapiente voluptatum labore fuga!`,
        stack: [
            { name: "Python" },
            { name: "Tensorflow" },
            { name: "OpenCV" },
        ],
        name: "AI Enable Trafic Light Control",
        image: '/assets/work/thumb2.png',
        live: "",
        github: "",
    },
    {
        num: "03",
        category: "Backend",
        title: "project 3",
        description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Ducimus dolor officia, sapiente voluptatum labore fuga!`,
        stack: [
            { name: "Next.js" },
            { name: "Reac" },
            { name: "Mysql" },
        ],
        name: "Hospital Managment",
        image: '/assets/work/thumb3.png',
        live: "",
        github: "",
    },
    {
        num: "04",
        category: "FullStack",
        title: "project 4",
        description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Ducimus dolor officia, sapiente voluptatum labore fuga!`,
        stack: [
            { name: "Django" },
            { name: "FastApi" },
            { name: "React" },
        ],
        name: "WeWon App",
        image: '/assets/work/thumb1.png',
        live: "",
        github: "",
    },
]





const Work = () => {
    const [project, setProject] = useState(projects[0])

    const handleSlideChange = (swiper) => {
        // get current slide index
        const currentIndex = swiper.activeIndex;;
        // update project state based on current slide index
        setProject(projects[currentIndex]);
    }

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1, transition: {
                    delay: 2.4, duration: 0.4, ease: "easeIn"
                }
            }}
            className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'>
            <div className="container mx-auto">
                <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
                    {/* text Phase */}
                    <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between
                    order-2 xl:order-none'>
                        <div className='flex flex-col gap-[30px] h-[50%]'>
                            {/* outline num */}
                            <div className="text-8xl leading-none font-extrabold text-transparent
                            text-outline">
                                {project.num}
                            </div>
                            {/* project category */}
                            <h2 className='text-[42px] font-bold leading-none text-white
                            group-hover:text-accent transition-all duration-500 capitalize'>
                                {project.category} Project
                            </h2>
                            {/* Project Description */}
                            <p className="text-white/60">{project.description}</p>
                            {/* stack */}
                            <ul className='flex gap-4'>
                                {project.stack.map((item, index) => {
                                    return <li key={index} className='text-xl text-accent'>
                                        {item.name}
                                        {/* techinq to put cuma!
                                        Condition Check:
                                        index !== project.stack.length - 1 → Checks if the current item is not the last item in the array.
                                        Logical AND (&&) Operator Trick:
                                        If index !== project.stack.length - 1 is true, then "," (a comma) is rendered.
                                        If index === project.stack.length - 1 (last item), false && "," results in nothing being rendered. */}
                                        {index !== project.stack.length - 1 && ","}
                                    </li>
                                })}
                            </ul>
                            {/* border */}
                            <div className="border boreder-white/20"></div>
                            {/* button */}
                            <div className='flex items-center gap-4'>
                                {/* Live project button */}
                                <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className='w-[70px] h-[70px] rounded-full
                                            bg-white/5 flex justify-center items-center group'>
                                                <BsArrowUpRight className='text-white text-3xl
                                                group-hover:text-accent' />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                {/* Gihhub project button */}
                                <Link href={project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className='w-[70px] h-[70px] rounded-full
                                            bg-white/5 flex justify-center items-center group'>
                                                <BsGithub className='text-white text-3xl
                                                group-hover:text-accent' />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* shot of project */}
                    <div className='w-full xl:w-[50%]'>
                        <Swiper spaceBetween={30}
                            slidesPerView={1}
                            className='xl:h-[520px] mb-22'
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((project, index) => {
                                return <SwiperSlide key={index} className='w-full'>
                                    <div className='h-[460px] relative group glex justify-center
                                    items-center bg-pink-50/20'>
                                        {/* overlay */}
                                        <div className='absolute top-0 bottom-0 w-ful h-full
                                        bg-black/10 z-10'></div>
                                        {/* image */}
                                        <div className='relative w-full h-full'>
                                            <Image src={project.image} fill className='object-cover'
                                                alt='' />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            })}
                            {/* slider btn */}
                            <WorkSliderBtns containerStyles="flex gap-2 absolute right-0
                            bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between
                            xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover
                            text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center
                            transition-all" iconsStyles="" />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};
export default Work;