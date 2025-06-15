import React, { useEffect, useRef } from "react";
import gsap from 'gsap';

const AnimatedTitle = ({title,containerClass}) => {
    const containerRef=useRef(null);

    useEffect(()=>{
        const ctx=gsap.context(()=>{
            const titleAnimation=gsap.timeline({
                scrollTrigger:{
                    trigger:containerRef.current,
                    start:'100 bottom',
                    end:'center bottom',
                    toggleActions:'play none none reverse'
                }
            })
        },containerRef)
    },[]);

  return (
    <div className={`animated-title ${containerClass}`}>
        {title.split('<br />').map((Linear,index)=>(
            <div key={index} className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3">
                {Linear.split('').map((word,i)=>(
                    <span kei={i} className="animated-word" dangerouslySetInnerHTML={{__html:word}} />
                ))}
            </div>
        ))}
    </div>
  );
};

export default AnimatedTitle;
