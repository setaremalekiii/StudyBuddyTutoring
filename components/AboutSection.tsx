import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { HiArrowDown } from "react-icons/hi"
import { Link } from "react-scroll/modules"


const skills = [
  { skill: "Mathematics" },
  { skill: "Sciences" },
  { skill: "Chemistry" },
  { skill: "Biology" },
  { skill: "Physics" },
  { skill: "Mentorship" },

]

const AboutSection = () => {
  return (
    <section id="about">
<div className="my-12 pb-8 md:pt-16 md:pb-19">
        <h1 className="text-center font-bold text-4xl">
        About Study Buddy Tutoring
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Hello and Welcome!
            </h1>
            <p>
            We&apos;re a duo of Biomedical Engineering students from the 
            University of British Columbia, driven by a shared passion for
             empowering high school and middle school students in their STEM journey. 
             Our mission? To pave your path to academic excellence 
             through dedicated mentorship and tutoring. What sets us apart is our  
             <span className="font-bold">{"ambition"}</span>,
              <span className="font-bold">{" vision"}</span>, and
              <span className="font-bold">{" drive"}</span> to make a possitive impact 
              and build strong foundation of Math and sciences for students of all levels.
            </p>
            <br />
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              What sets us apart: 
            </h1>
            <p>
            <span className="font-bold">{" Tailored Tutoring: "}</span> 
             Dive into weekly sessions, available both online and in-person,
             focusing on Math and Science. We&apos;re here to tackle those tricky
             topics and homework hurdles together.
            </p>
            <br />

            <p>
            <span className="font-bold">{" University Prep: "}</span> 
             Dreaming of university? We&apos;re got your back. From choosing
             the right institution to crafting standout applications 
             and securing scholarships,We&apos;re your guiding light.
            </p>
            <br />

            <p>
            <span className="font-bold">{" Beyond the Books: "}</span> 
             It&apos;s not just about grades. We&apos;ll help you shine with extracurriculars, 
            initiate impactful projects, and build a resume that resonates with success.
            </p>
            <br />

            <br />
            <p>
            We firmly believe that with the {" "}
              <span className="font-bold text-teal-500">
              right foundation
              </span>{" "}
              , anyone can excel in their studies, beyond the 
              boundaries of their background. Starting this journey 
              early not only sets the stage for academic success but also
               propels individuals towards a future brimming with achievement.🙂
            </p>

            <a href="https://www.youtube.com/watch?v=Atme26C0l5E" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 'bold', color: '#12CBA6' }}>
  Click here to get INSPIRED!
</a>



          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">Teachings</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
              <div style={{ marginTop: '20px' }}>
                <Image src="/cute.gif" alt="Description" width={440} height={440} />
            </div>
            </div>
    
          </div>
        </div>
        <div className="flex justify-center">
  <HiArrowDown size={35} className="animate-bounce my-0" />
</div>
      </div>

      
    </section>
  )
}

export default AboutSection
