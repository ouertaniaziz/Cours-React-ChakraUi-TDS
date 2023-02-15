import React from "react";

const ImageCaption = () => {
  return (
    <figure>
      <img src="https://via.placeholder.com/300x200" alt="Placeholder Image" />
      <figcaption>
        <h3>Titre de l'image</h3>
        <p>Légende de l'image</p>
      </figcaption>
    </figure>
  );
};

export default ImageCaption;
