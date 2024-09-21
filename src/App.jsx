import { BrowserRouter } from "react-router-dom";
// import { useEffect } from 'react';
// import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { About, Contact, Experience, 
  Feedbacks, 
  Hero, Navbar, Tech, Works, 
  // StarsCanvas, 
  Certifications, Footer } from "./components";

// toast.configure();


const App = () => {
  //   useEffect(() => {
  //   alert('This page has been repurposed');
  // }, []);

  //   useEffect(() => {
  //   toast.info('This page has been updated');
  // }, []);
  return (
    <BrowserRouter>
     {/* <ToastContainer /> */}
      <div className='relative z-0 bg-slate-950 '>
        <div className=' bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
          {/* <StarsCanvas /> */}

        </div>
        <About />
        <Certifications />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          {/* <StarsCanvas /> */}
        </div>
        <Footer />
        {/* <StarsCanvas /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;