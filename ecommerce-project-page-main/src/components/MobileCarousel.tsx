import "./MobileCarousel.scss";

type MobileCarouselProps = {
  currentImage: number;
  handleShowNextThumbnailImg: () => void;
  handleShowPreviousThumbnailImg: () => void;
};

export function MobileCarousel({
  currentImage,
  handleShowNextThumbnailImg,
  handleShowPreviousThumbnailImg,
}: MobileCarouselProps) {
  return (
    <div className="mobile-carousel">
      <button
        className="mobile-carousel__prev-btn carousel-btn"
        onClick={handleShowPreviousThumbnailImg}
      >
        <img src="./images/icon-previous.svg" alt="" />
      </button>
      <img
        className="mobile-carousel__featured-img"
        src={`./images/image-product-${currentImage + 1}.jpg`}
        alt={`shoe product thumbnail ${currentImage + 1}`}
      />
      <button
        className="mobile-carousel__next-btn carousel-btn"
        onClick={handleShowNextThumbnailImg}
      >
        <img src="./images/icon-next.svg" alt="" />
      </button>
    </div>
  );
}
