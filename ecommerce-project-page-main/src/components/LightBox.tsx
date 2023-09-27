import { useState } from "react";
import { LIST_OF_LIGHTBOX_LARGE_IMAGES } from "../constants";
import { ThumbnailImages } from "./ThumbnailImages";
import { LightBoxModal } from "./LightBoxModal";
import "./LightBox.scss";

type LightBoxProps = {
  currentThumbnailImg: number;
  setCurrentThumbnailImg: (index: number) => void;
  handleShowNextThumbnailImg: () => void;
  handleShowPreviousThumbnailImg: () => void;
};

export function LightBox({
  currentThumbnailImg,
  handleShowNextThumbnailImg,
  handleShowPreviousThumbnailImg,
  setCurrentThumbnailImg,
}: LightBoxProps) {
  const [isLightBoxModalShowing, setIsLightBoxModalShowing] = useState(false);
  const handleToggleLightBoxModal = () => {
    console.log(isLightBoxModalShowing);

    setIsLightBoxModalShowing(!isLightBoxModalShowing);
  };

  return (
    <>
      {isLightBoxModalShowing && (
        <LightBoxModal
          handleToggleLightBoxModal={handleToggleLightBoxModal}
          currentImage={currentThumbnailImg}
          handleShowNextThumbnailImg={handleShowNextThumbnailImg}
          handleShowPreviousThumbnailImg={handleShowPreviousThumbnailImg}
          setCurrentThumbnailImg={setCurrentThumbnailImg}
        />
      )}
      <div className="lightbox">
        <button
          onClick={handleToggleLightBoxModal}
          className="lightbox__btn"
          type="button"
        >
          <img
            className="lightbox__btn__current-img"
            src={LIST_OF_LIGHTBOX_LARGE_IMAGES[currentThumbnailImg].src}
            alt={LIST_OF_LIGHTBOX_LARGE_IMAGES[currentThumbnailImg].alt}
          />
        </button>

        <ThumbnailImages
          handleChangeCurrentImage={(index) => setCurrentThumbnailImg(index)}
          currentThumbnailImg={currentThumbnailImg}
        />
      </div>
    </>
  );
}
