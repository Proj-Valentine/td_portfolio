/* eslint-disable react/prop-types */
// import {Tilt} from "react-tilt";
// import { motion } from "framer-motion";

import { styles } from "../styles";
import { github,url } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
// import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  // index,
  name,
  description,
  tags,
  image,
  source_code_link,
  github_link,
}) => {
  return (
    // <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div
        className=' p-5 text-black rounded-2xl sm:w-[360px] w-full border'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl border'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(github_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mr-1'
            >
              <img
                src={github}
                alt='source code'
                className='w-4/4 h-4/4 object-contain '
              />
            </div>
            {source_code_link && ( <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='bg-white w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={url}
                alt='Live Url'
                className='w-4/4 h-4/4 object-contain '
              />
            </div>)}
            
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-white text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    // </motion.div>
  );
};

const Works = () => {
  return (
    <>
      {/* <motion.div variants={textVariant()}> */}
        {/* <p className={`${styles.sectionSubText} `}>My work</p> */}
        <div className='grid justify-items-center md:justify-items-start'
>
          <h2 className={`${styles.sectionHeadText}`}>My Projects</h2>
        </div>
      {/* </motion.div> */}

      <div className='w-full flex'>
        <p
          // variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-white text-[15px] max-w-3xl leading-[30px]'
        >
            My portfolio features <span className="font-bold">full-stack apps</span> and 
            <span className="font-bold"> big data projects</span> using SQL/NoSQL databases like 
            <span className="font-bold"> MongoDB</span>, <span className="font-bold">PostgreSQL</span>, 
            and <span className="font-bold">MySQL</span>, with languages such as 
            <span className="font-bold"> JavaScript</span>, <span className="font-bold">TypeScript</span>, 
            <span className="font-bold"> Java</span>, and <span className="font-bold">Python</span>. 

            I’ve built <span className="font-bold">search engines</span>, 
            <span className="font-bold"> REST APIs</span>, 
            <span className="font-bold"> data pipelines</span>, and 
            <span className="font-bold"> web apps</span> using frameworks like 
            <span className="font-bold"> React</span>, <span className="font-bold">Next.js</span>, 
            <span className="font-bold"> Express</span>, and <span className="font-bold">Spring Boot</span>. 

            I also utilize cloud platforms like <span className="font-bold">AWS</span>, 
            <span className="font-bold">Azure</span>, and <span className="font-bold">Google Cloud</span>, 
            along with <span className="font-bold">Docker</span> for CI/CD. 

            Each project includes a description and source code, showcasing my 
            <span className="font-bold"> technical range</span> and 
            <span className="font-bold"> problem-solving skills</span>.

        </p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project) => (
           <div key= {project.name} onClick={() => window.open(project.source_code_link, "_blank")}
              className='cursor-pointer'
            >
              <ProjectCard key={`project-${name}`}  {...project} />
          </div>

        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "project");