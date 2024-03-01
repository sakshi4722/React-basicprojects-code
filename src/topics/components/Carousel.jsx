import { useState } from "react";
function Carousel(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const handlePrevClick = () => {
    setActiveIndex(
      activeIndex === 0 ? props.items.length - 1 : activeIndex - 1
    );
  };
  const handleNextClick = () => {
    setActiveIndex(
      activeIndex === props.items.length - 1 ? 0 : activeIndex + 1
    );
  };
  return (
    <div className="carousel  flex justify-between items-center m-4 p-4">
      <button onClick={handlePrevClick}>Prev</button>
      <div className="carousel-item flex  flex-col">
        <img
          src={props.items[activeIndex].imageUrl}
          alt={props.items[activeIndex].title}
        />
        <h3>{props.items[activeIndex].title}</h3>
        <p>{props.items[activeIndex].description}</p>
      </div>
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
}

export default Carousel;
