import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  desk: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 576 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 576, min: 0 },
    items: 2,
  }
};

export default function ScrollableBar({ children }: { children: React.ReactNode }) {
  return (
    <Carousel
      containerClass="w-full flex gap-2"
      itemClass="flex justify-center item-center"
      responsive={responsive}>
      {children}
    </Carousel>
  )
}