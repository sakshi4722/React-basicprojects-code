import { useState } from "react";
import './modal.css'

function Modal(props) {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <>
    {
isOpen?<button className="close-button" onClick={handleClose}>
{props.buttonText2}
</button>
:<button className="open-button" onClick={handleOpen}>{props.buttonText1}</button> 

    }
      
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <h1>hello duniya</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore laudantium possimus repellendus vero necessitatibus dignissimos quisquam aperiam, voluptas, provident, repellat aspernatur quibusdam pariatur harum cum quasi temporibus. Nostrum, quos eum.</p>
            <img src="https://worldanimalfoundation.org/wp-content/uploads/2023/10/types-of-huskies-2-1536x864.jpg" alt="" />
            
            {props.children}
          </div>
        </div>
      )}
    </>
  );
}
export default Modal