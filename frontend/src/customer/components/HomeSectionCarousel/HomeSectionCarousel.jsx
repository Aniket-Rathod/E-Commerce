import React, { useRef, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const HomeSectionCarousel = ({ sectionName, data = [] }) => {

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const slidePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  };

  const slideNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  };

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const items = data.slice(0, 10)
    .map((item, index) => <HomeSectionCard product={item} key={index} />);

  return (
    <div className="border">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>
      <div className="relative p-5 ">
        <AliceCarousel
          ref={carouselRef}
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />

        {activeIndex !== items.length - 5 && (
          <Button
            onClick={slideNext}
            variant="contained"
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
              backgroundColor: "white",
              color: "black",
              "&:hover": { backgroundColor: "#f0f0f0" },
            }}
            aria-label="next"
          >
            <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)" }} />
          </Button>
        )}

        { activeIndex !==0 &&
          <Button
            onClick={slidePrev}
            variant="contained"
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "translateX(-50%) rotate(-90deg)",
              backgroundColor: "white",
              color: "black",
              "&:hover": { backgroundColor: "#f0f0f0" },
            }}
            aria-label="previous"
          >
            <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)" }} />
          </Button>
        }
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
