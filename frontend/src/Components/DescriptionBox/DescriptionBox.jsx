import React from "react";
import "./DescriptionBox.css";

export const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          {" "}
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa minus
          rerum cupiditate ullam quis fuga ipsam corrupti ducimus porro? Fugit
          eius, facilis magni vel tempora quaerat reprehenderit recusandae hic
          accusantium.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          ullam exercitationem cumque libero voluptates aut, fugiat sint veniam
          accusantium molestiae dignissimos praesentium ea architecto, quaerat
          eum optio commodi quibusdam. Culpa?
        </p>
      </div>{" "}
    </div>
  );
};
