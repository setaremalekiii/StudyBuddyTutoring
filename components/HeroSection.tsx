"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"
import { motion } from 'framer-motion';
const HeroSection = () => {
  return (
    //bg-blue-500
    <section id="home">
<div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-0 py-8 sm:py-16 md:py-24 md:flex-row md:space-x-4 md:text-left  ">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/ghazi.png"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}}>
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Hi, I&#39;m Ghazal Fallahpour!</h1>
          </motion.div>

          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a{" "}
            <span className="font-semibold text-teal-600">
            Biomedical Engineering student at UBC {" "}
            </span>
            specializing in Computer Science, and I&#39;ve been on the Dean&#39;s honor&#39;s list since I started my degree! I have over 2 years of experience tutoring high school students, and I always try to teach in a way so that the students can thoroughly grasp the concepts, rather than memorizing the content. Having been in high school not too long ago myself, I know how important it is to have a good understanding of the foundational curriculum that is taught in grade school, and I&#39;m here to make learning as easy as possible!
          </p>
        
        </div>
      </div>
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-1 my-0 py-8 sm:py-16 md:py-24 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/this.png"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}}>

          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Hi, I&#39;m Setare Maleki!</h1>
          </motion.div>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a{" "}
            <span className="font-semibold text-teal-600">
            Biomedical Engineering student at University of British Columbia{" "}
            </span>
            . I was enrolled in the full International Baccalearate (IB) program in high school. 
            I also was very involved in extracurricular activities and was able to secure $50k in 
            scholarships for my academics and involvements. I really enjoy learning and teaching math, 
            physics and chemitry, and have experience tutoring high school level mathmatics. My goal is 
            to pass on my current knoweldge, teach students how to understand fundamental concepts and ultimately 
            boost their confidence in academia and their extracurricular activities.  
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
      </div>

      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>

  )
}

export default HeroSection
