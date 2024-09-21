/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
// import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubText}>Introduction</p> */}
        <h2 className={styles.sectionHeadText}>Profile</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-white text-[15px] max-w-3xl leading-[30px]'
      >
       Innovative Data Engineer and Software Developer with over 5 years of 
       experience in optimizing cloud infrastructure for business process enhancement. 
       Expertise in full-stack development, cloud computing, and data engineering. 
       Proven track record of leveraging AWS and Azure to architect and 
       streamline data workflows, ensuring security, availability, and maintainability. 
       Passionate about driving growth and productivity through data-driven decisions
       and collaborative team efforts.
      </motion.p>



      <div className='mt-20'>
        <h1 className={`${styles.sectionHeadText} text-center`}>My services</h1>
      </div>
      <div className='mt-20 flex justify-center items-center flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");