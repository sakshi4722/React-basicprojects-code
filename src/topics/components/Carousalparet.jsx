import Carousel from "./carousel";
import React from "react";

function Carousalparet() {
  const items = [
    {
      title: "TITLE1",
      imageUrl:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fsandwich&psig=AOvVaw1TRf5-4qsS83Nof5GKF8bY&ust=1707928299930000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPCp9vneqIQDFQAAAAAdAAAAABAE",
        description: "this is vegies sandwich 1",
    },
    {
      title: "TITLE2",
      imageUrl:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fsandwich&psig=AOvVaw1TRf5-4qsS83Nof5GKF8bY&ust=1707928299930000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPCp9vneqIQDFQAAAAAdAAAAABAE",
        description: "this is vegies sandwich 2",
    },

    {
      title: "TITLE3",
      imageUrl:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fsandwich&psig=AOvVaw1TRf5-4qsS83Nof5GKF8bY&ust=1707928299930000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPCp9vneqIQDFQAAAAAdAAAAABAE",
        description: "this is vegies sandwich 3",
    },
  ];
  return (
    <div>
      <Carousel items={items} />
    </div>
  );
}

export default Carousalparet;
