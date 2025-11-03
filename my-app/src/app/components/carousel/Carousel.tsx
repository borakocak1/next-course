"use client";
import { useState } from "react";
import "./Carousel.css";
import Image from "next/image";
import rightChevron from "../../../../public/assets/images/carrousel/flech-right.png"
import leftChevron from "../../../../public/assets/images/carrousel/flech-left.png"
import { StaticImageData } from "next/image";
import data from "../../../../public/data/data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

type CarouselProps = {
  images: string[];
};

// export default function Carousel({ images }: CarouselProps){

// const images = []

export default function Carousel({ images }: CarouselProps) {
  const [current, setCurrentImage] = useState(0);

  const currentImage = images[current];

  function increaseImage() {
    if (current >= images.length) {
      setCurrentImage(0);
      return;
    }
    setCurrentImage(current + 1);
  }
  function decreaseImage() {
    if (current <= 0) {
      setCurrentImage(images.length - 1);
      return;
    }
    setCurrentImage(current - 1);
  }

  return (
    <div className="carousel">
      <div className="images">
        <Image
          className="carousel-image"
          src={currentImage}
          style={{ objectFit: "cover" }}
          alt="CarouselImage"
          fill
        />
         <Image
          className="carousel-button right-button"
          src={rightChevron}
          alt="rightChevron"
          onClick={decreaseImage}
        />
        <Image
          className="carousel-button left-button"
          src={leftChevron}
          alt="leftChevron"
          onClick={increaseImage}
        />
      {/* <button className="carousel-button right-button" onClick={decreaseImage}></button> */}
      {/* <button className="carousel-button left-button" onClick={increaseImage}></button> */}
      </div>
    </div>
  );
}
