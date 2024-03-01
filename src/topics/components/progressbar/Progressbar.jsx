import './progressbar.css'
function ProgressBar({ value, max }) {
    const percentage = Math.floor((value / max) * 100);
    return (
    <div className="progress-bar">
    <div className="progress-bar__fill" style={{ width: `${percentage}%`
   }}>
    {percentage}%
    </div>
    </div>
    );
   }
   export default ProgressBar