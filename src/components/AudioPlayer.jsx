import React, { useState, useRef, useEffect } from 'react'
import './AudioPlayer.css'
const AudioPlayer = ({audioSrc}) => {

    const[isPlaying, setIsPlaying] = useState(false);
    const[currentTime, setcurrentTime] = useState(0);
    const[duration, setduration] = useState(0);

    const audioRef = useRef(null);

    const handleSeek = (e) => {
        audioRef.current.currentTime = e.target.value;
        setcurrentTime(e.target.value);
    };

    const handleTimeUpdate = () => {
        setcurrentTime(audioRef.current.currentTime);
        setduration(audioRef.current.duration);
    };


    const handlePlay = ()  => {

        audioRef.current.play()
        setIsPlaying(true);
    };

    const handlePause = () => {

        audioRef.current.pause();
        setIsPlaying(false);
    };



    const handlePlayPause = () => {
        if (isPlaying) {
            handlePause();
        } else {
            handlePlay();
        }
    };

    function formatDuration (durationSeconds) {
        const minutes = Math.floor(durationSeconds/60);
        const seconds = Math.floor(durationSeconds % 60);
        const formattedSeconds = seconds.toString().padStart(2, "0");
        return `${minutes}:${formattedSeconds}`;
    }


   useEffect (() => {
    audioRef.current.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
        audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
    };
   }, []); 
    

  return (
    <div className="player-card">
        <img src="./assets/cover1.png" alt="Cover Image"/>

        <input
        type="range"
        min="0"
        max={duration}
        value={currentTime}
        onChange={handleSeek}
        />

        <audio ref = {audioRef}  src={audioSrc} />

        <div className="track-duration">
            <p>{formatDuration(currentTime)}</p>
            <p>{formatDuration(duration)}</p>
        </div>

        <button onClick={handlePlayPause}>
            <span class = "material-symbols-rounded">
                {isPlaying ? "pause" : "play_arrow"}
            </span>
        </button>
    </div>
  )
}

export default AudioPlayer