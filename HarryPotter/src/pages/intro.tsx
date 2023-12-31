import videobg from '../assets/Intro Harry Potter con After Effects efecto Parallax_NoeliaPérez_MasterMPD (online-video-cutter.com).mp4';

import { useState, useEffect } from 'react';

export default function intro() {
    const [show, setShow] = useState(false)


    useEffect(() => {
      setTimeout(() => setShow(true), 10000);
    }, []);  
  
  return (
<div className="body">
<video className="w-screen max-sm:w-screen max-sm:h-screen " src={videobg}  autoPlay  muted></video>

{show &&
  <a href="/Login"><button className=" btn group h-12 w-48 max-sm:w-20 max-sm:top-[24.5rem] max-sm:left-[9rem] top-[42rem] left-[41rem] max-sm:h-9 overflow-hidden rounded-2xl bg-slate-800 max-sm:text-xs text-lg font-bold text-white italic">
    Welcome 
    <div className=" absolute inset-0 h-full w-full scale-0 rounded-2xl  transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
  </button></a>}

  </div>
  )
}
