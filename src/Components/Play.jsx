import React,{useState,useEffect,useRef} from 'react'
import ke from '../Music/kesariya.mp3';

const Play = () => {
    const audioRef = useRef(new Audio("./kesariya.mp3"));
    const [playing, setPlaying] = useState(false);
    const play = () => {
      setPlaying(true);
      audioRef.current.play();
    };
  
    const pause = () => {
      setPlaying(false);
      audioRef.current.pause();
    };
  
  

  
  

        
    
    const posts = [
        {
            title: "React Tailwind Card with Grid 1",
            img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
        },
        {
            title: "React Tailwind Card with Grid 2",
            img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
        },
        {
            title: "React Tailwind Card with Grid 3",
            img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
        },
        {
            title: "React Tailwind Card with Grid 4",
            img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
        },
        {
            title: "React Tailwind Card with Grid 4",
            img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
        },
        {
            title: "React Tailwind Card with Grid 4",
            img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
        },
       
    ];
    return (
        <>
            <div className="grid gap-2 md:grid-cols-3 lg:grid-cols-6 ">
                {posts.map((items, key) => (
                    <div className="hover:bg-slate-700 p-4  rounded">
                    <div  className="bg-neutral-700  rounded-lg shadow-md lg:max-w-sm" key={key}>
                        <img onClick={playing ? pause : play}
                            className="object-cover h-48"
                            src={items.img}
                            alt="image"
                        />
                        
                        
                        <div  className="">
                            <h4  className="text-xl font-semibold text-white">
                                
                                {items.title}
                            </h4>
                            <p className="mb-2   text-white">
                            {items.content}
                            </p>
                            
                        </div>
                    </div>
                    </div>
                ))}
            </div>
            {/* <audio controls>
  <source src="./kesariya.mp3" type="audio/ogg"/>
  
  Your browser does not support the audio tag.
</audio> */}
        </>
  )
}

export default Play
