import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  desk: {
    breakpoint: { max: 4000, min: 576 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 576, min: 0 },
    items: 2,
  }
};

type ScrollableBarProps = {
  children: React.ReactNode;
  ariaLabel?: string;
};

export default function ScrollableBar({ children, ariaLabel }: ScrollableBarProps) {
  return (
    <Carousel
      containerClass="w-full pb-12 px-8 md:px-16 relative"
      itemClass="px-2 sm:px-4 mb-4"
      draggable
      swipeable
      focusOnSelect
      renderDotsOutside
      responsive={responsive}
      aria-label={ariaLabel}
    >
      {children}
    </Carousel>
  )
}

