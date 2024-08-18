import React from 'react'
import "./App.css";
import AudioPlayer from './components/AudioPlayer';

const App = () => {
  return (
    <div className="container">
        <h1>Music Player</h1>
        <AudioPlayer audioSrc='./audio/WOH.mp3' />
        <footer> Copyright 2024 © Sanjosh Satsangi</footer>
    </div>
    
    
  )
}

export default App