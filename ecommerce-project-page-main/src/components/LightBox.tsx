import React, { useState } from "react";
import { LIST_OF_LIGHTBOX_LARGE_IMAGES } from "../constants";
import { ThumbnailImages } from "./ThumbnailImages";
import "./LightBox.scss";

export function LightBox() {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="lightbox">
      <button className="lightbox__btn" type="button">
        <img
          className="lightbox__btn__current-img"
          src={LIST_OF_LIGHTBOX_LARGE_IMAGES[currentImage].src}
          alt={LIST_OF_LIGHTBOX_LARGE_IMAGES[currentImage].alt}
        />
      </button>
      <ThumbnailImages
        handleChangeCurrentImage={(index) => setCurrentImage(index)}
        currentThumbnailImg={currentImage}
      />
    </div>
  );
}
