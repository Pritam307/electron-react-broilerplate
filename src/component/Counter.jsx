import React, {useState ,useEffect,useRef} from 'react';
import PlyrComponent from 'plyr-react'


// import Plyr from 'react-plyr';


const Counter = () => {

    const [videoFilePath,setVideoFilePath]=useState('');

    const plyrRef = useRef();
    const handleFileSelect=(event)=>{
        console.log("file select:",event.target.files);
        console.log("file select:",event.target.files.File);
        setVideoFilePath(URL.createObjectURL(event.target.files[0]));
    };

    // const handleClick=()=>{
    //     console.log("clicked");
        
    // };

    useEffect(()=>{
        console.log(plyrRef.current.plyr)
    },[])


    const videoSrc = {
        type: "video",
        title: 'Example title',
        sources: [
            {
                src: videoFilePath,
                type: 'video/mp4',
            }
        ]
    };

    return (
        <div className="col-12   mt-4">
                <input type="file" onChange={(e)=>handleFileSelect(e)} id="formFile"/>
                
                {/* <Plyr 
                    ref={plyrRef}
                    source={videoSrc}
                /> */}

                <PlyrComponent 
                    ref={plyrRef}
                    source={videoSrc}
                />

                {/* <Plyr
                    type="youtube" // or "vimeo"
                    videoId="CDFN1VatiJA"
                /> */}

                <button className="btn btn-primary" onClick={()=>plyrRef.current.plyr.play()}>Play</button>
        
        </div>
    );
};

export default Counter;