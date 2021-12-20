import "./ProductCard.css";

import React from "react";

const ImageHover = ({ imgs, onClick }) => {
  const [hovered, setHovered] = React.useState(0);
  return (
    <div
      className={hovered !== 0 ? "image-card active-switcher" : "image-card"}
    >
      <img className={hovered === 1 ? "pmhovered" : ""} src={imgs[0]} />
      <img
        className={hovered === 2 ? "pmhovered" : ""}
        src={imgs[0]}
        src={imgs[1]}
      />
      <span className="pmimage-switcher" onClick={onClick}>
        <span
          onMouseEnter={() => setHovered(1)}
          onMouseLeave={() => setHovered(0)}
        ></span>
        <span
          onMouseEnter={() => setHovered(2)}
          onMouseLeave={() => setHovered(0)}
        ></span>
      </span>
    </div>
  );
};

export default ImageHover;
