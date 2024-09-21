import { FooterData } from '../constants/'
import { SectionWrapper } from '../hoc/'

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center'>

        {/* <h2 className='text-white text-xl'>@socials</h2> */}
        <footer className=' text-white text-center flex justify-center py-10'>

            {FooterData.map((data, index) => (
                <div key={index} className='text-white hover:text-gray-400 flex flex-col items-start justify-end'>
                    <span className='mx-2'>
                        <a key={index} href ={data.url} className='text-white hover:text-gray-400'>
                            <img src={data.icon} alt={data.name} className='w-12 h-12 bg-white rounded' />
                             <p className='text-sm'>{data.name}</p>
                        </a>
                    </span>
                </div>
            ))}            
        </footer>   
        <div className=' text-white text-center flex justify-center py-10'>
            <p className='text-white'>© 2024 All rights reserved</p>
        </div>
      
    </div>
  )
}


export default SectionWrapper(Footer, "");
