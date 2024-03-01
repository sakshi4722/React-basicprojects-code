import ProgressBar from "./Progressbar";
import { useState, useEffect } from "react";
function Progressbarperent() {
    const [progress, setProgress] = useState(0);
    



    useEffect(() => {
    const interval = setInterval(() => {
    setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress +
   10));
    }, 1000);
    return () => clearInterval(interval);
    }, []);
    
    return (
    <div className="app">
    <ProgressBar value={progress} max={100} />
    </div>
    );
   }

   export default Progressbarperent