
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const[progress, setProgress] = useState(0);

  const fillStyle={
    width:`${progress}%`,
    background:"#00C251",
  };
 

  useEffect(()=>{
    if(progress < 100){
      const timer = setInterval(()=>{
        setProgress((prev) => Math.min(prev + 1, 100));
      }, 500);
      return () => clearInterval(timer);
    }
  }, [progress]);

  return (
    
    <div className="App">
      <header className="App-header" >
        <h1 >Progress Bar</h1>
      </header>

      {/* Progress Bar */}

      <div className='progress-bar'>
        <div className='fill-bar' style={fillStyle}></div>
        <span className="progress-text">{progress}%</span>
      </div>
      

      <p className='textStyle'>{progress < 100 ? "Loading..." : "Completed!"}</p>
      </div>
  );

}

export default App;
