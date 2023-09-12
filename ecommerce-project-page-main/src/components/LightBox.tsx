import React, { useState } from "react";
import { LIST_OF_LIGHTBOX_LARGE_IMAGES } from "../constants";
import { ThumbnailImages } from "./ThumbnailImages";

export function LightBox() {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="lightbox">
      <img src={LIST_OF_LIGHTBOX_LARGE_IMAGES[currentImage]} alt="" />
      <ThumbnailImages />
    </div>
  );
}
