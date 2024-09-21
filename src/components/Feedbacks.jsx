/* eslint-disable react/prop-types */

// import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
// import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  // index,
  testimonial,
  name,
  designation,
  company,
  image,
  profile,
}) => (
  <div
    // variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-slate-950 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <p className='text-white font-black text-[48px]'>&quot;</p>

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[14px]'>{testimonial}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation} at {company}
          </p>
          <p>
            profile: <a href ={profile} target='_blank' className='text-[#ff5ef2]'>LindedIn</a>
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>
  </div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-gray-900 rounded-[20px]`}>
      <div
        className={`rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <div 
        
        >
          {/* <p className={styles.sectionSubText}>What others say</p> */}
          <h2 className={styles.sectionHeadText}>References</h2>
        </div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial) => (
          <FeedbackCard key={testimonial.name}  {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "feedbacks");