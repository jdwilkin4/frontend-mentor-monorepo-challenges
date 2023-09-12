import { LIST_OF_LIGHTBOX_LARGE_IMAGES } from "../constants";
import { ThumbnailImages } from "./ThumbnailImages";
type LightBoxModalProps = {
  currentImage: number;
};

export function LightBoxModal({ currentImage }: LightBoxModalProps) {
  return (
    <div className="modal">
      <button>
        <img src="./images/icon-close" alt="" />
      </button>
      <div className="modal__img-carousel">
        <button>
          <img src="./images/icon-previous" alt="" />
        </button>
        <img src={LIST_OF_LIGHTBOX_LARGE_IMAGES[currentImage]} alt="" />
        <button>
          <img src="./images/icon-next" alt="" />
        </button>
      </div>
      <ThumbnailImages />
    </div>
  );
}
