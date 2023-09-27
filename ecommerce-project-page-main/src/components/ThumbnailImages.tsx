import clsx from "clsx";
import { LIST_OF_LIGHTBOX_LARGE_IMAGES } from "../constants";
import "./ThumbnailImages.scss";

type ThumbnailImagesProps = {
  currentThumbnailImg: number;
  handleChangeCurrentImage: (index: number) => void;
};

export function ThumbnailImages({
  currentThumbnailImg,
  handleChangeCurrentImage,
}: ThumbnailImagesProps) {
  return (
    <div className="thumbnail-container">
      {LIST_OF_LIGHTBOX_LARGE_IMAGES.map(({ src, id, alt }) => (
        <button
          onClick={() => handleChangeCurrentImage(id - 1)}
          className="thumbnail-container__btn"
          key={src}
        >
          <img
            className={clsx(
              id === currentThumbnailImg + 1
                ? "thumbnail-container__btn__current-thumbnail-img"
                : "thumbnail-container__btn__thumbnail-img",
              "img"
            )}
            src={src}
            alt={alt}
          />
        </button>
      ))}
    </div>
  );
}
