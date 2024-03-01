import './Tooltip.css'

function Tooltip(props) {
    return (
    <span className="tooltip">
    {props.children}
    <span className="tooltiptext">{props.text}</span>
    </span>
    );
   }

export default Tooltip