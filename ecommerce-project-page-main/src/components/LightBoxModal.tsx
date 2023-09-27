import { LIST_OF_LIGHTBOX_LARGE_IMAGES } from "../constants";
import { ThumbnailImages } from "./ThumbnailImages";
import "./LightBoxModal.scss";

type LightBoxModalProps = {
  currentImage: number;
  setCurrentThumbnailImg: (index: number) => void;
  handleShowNextThumbnailImg: () => void;
  handleShowPreviousThumbnailImg: () => void;
  handleToggleLightBoxModal: () => void;
};

export function LightBoxModal({
  currentImage,
  handleShowNextThumbnailImg,
  handleShowPreviousThumbnailImg,
  setCurrentThumbnailImg,
  handleToggleLightBoxModal,
}: LightBoxModalProps) {
  return (
    <div className="modal">
      <button className="modal__close-btn" onClick={handleToggleLightBoxModal}>
        <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
            fill="#fff"
            fill-rule="evenodd"
          />
        </svg>
      </button>
      <div className="modal__img-carousel">
        <button
          className="modal__img-carousel__prev-btn modal-carousel-btn"
          onClick={handleShowPreviousThumbnailImg}
        >
          <img src="./images/icon-previous.svg" alt="" />
        </button>
        <img
          className="modal__current-img"
          src={LIST_OF_LIGHTBOX_LARGE_IMAGES[currentImage].src}
          alt={LIST_OF_LIGHTBOX_LARGE_IMAGES[currentImage].alt}
        />
        <button
          className="modal__img-carousel__next-btn modal-carousel-btn"
          onClick={handleShowNextThumbnailImg}
        >
          <img src="./images/icon-next.svg" alt="" />
        </button>
      </div>
      <ThumbnailImages
        handleChangeCurrentImage={(index) => setCurrentThumbnailImg(index)}
        currentThumbnailImg={currentImage}
      />
    </div>
  );
}
