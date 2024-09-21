// import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies,cloudtech,programming } from "../constants";
import { styles } from "../styles";
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'


const Tech = () => {
  return (
      <div>
      <h2 className={`${styles.sectionHeadText} text-center mb-10`}>
          Tech Stack
      </h2>
      <div className='flex flex-row flex-wrap justify-center gap-5'>
        {technologies.map((technology) => (
          <div 
          data-tooltip-id="mytooltip"
          data-tooltip-content={technology.name}
          data-tooltip-place="top"
          className='w-12 h-12' key={technology.name}>
            <img src={technology.icon} />
          </div>
        ))}
         <Tooltip id="mytooltip" />
      </div>


      <div className='flex flex-row flex-wrap justify-center gap-5'>
        {programming.map((technology) => (
          <div 
          data-tooltip-id="my-tooltip"
          data-tooltip-content={technology.name}
          data-tooltip-place="top"className='w-12 h-12' key={technology.name}>
            <img src={technology.icon} />
              
          </div>
        ))}
        <Tooltip id="my-tooltip" />
      </div>
      <div className='flex flex-row flex-wrap justify-center gap-5'>
        {cloudtech.map((technology) => (
          <div 
           data-tooltip-id="my-tool"
          data-tooltip-content={technology.name}
          data-tooltip-place="top"className='w-12 h-12' key={technology.name}>

            <img src={technology.icon} />
          </div>
        ))}
         <Tooltip id="my-tool" />
      </div>
    
        
      </div>
  );
};

export default SectionWrapper(Tech, "tech");