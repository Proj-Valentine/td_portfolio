/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";


// import { styles } from "../styles";
import { 
    // services,
    certificates } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, 
    // textVariant 
} from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card '
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
          className='object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);
const Certifications = () => {
  return (
    
    <div className='flex flex-col items-center justify-evenly'>
        
        <h1 className= {`${styles.sectionHeadText} text-center`}>Certifications</h1>
           <div className='mt-20 flex flex-wrap gap-10'>
        {certificates.map((service, index) => (
            <a href={service.url} key={service.title} target='_blank'  >
                <ServiceCard key={service.title} index={index} {...service} />
            </a>
        ))}
      </div>
      {/* <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="78f5aa97-95d1-48b3-a51e-b10710f559da" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script> */}
    </div>
  )
}

// export default Certifications
export default SectionWrapper(Certifications, "certifications");