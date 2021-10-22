import React, { Component } from "react";
import ReactDOM from "react-dom";
import data from "./data";
import cx from "classnames";
import NonPassiveTouchTarget from "./NonPassiveTouchTarget";
import TouchCarousel, { clamp } from "react-touch-carousel";
import touchWithMouseHOC from "react-touch-carousel/lib/touchWithMouseHOC";

import "./styless.scss";

const cardSize = 300;
const cardPadCount = 3;
const carouselWidth = clamp(window.innerWidth, 0, 960);

function CarouselContainer(props) {
  const {
    cursor,
    carouselState: { active, dragging },
    ...rest
  } = props;
  let current = -Math.round(cursor) % data.length;
  while (current < 0) {
    current += data.length;
  }
  // Put current card at center
  const translateX =
    (cursor - cardPadCount) * cardSize + (carouselWidth - cardSize) / 2;
  return (
    <NonPassiveTouchTarget
      className={cx("carousel-container", {
        "is-active": active,
        "is-dragging": dragging
      })}
    >
      <NonPassiveTouchTarget
        className="carousel-track"
        style={{ transform: `translate3d(${translateX}px, 0, 0)` }}
        {...rest}
      />

      <div className="carousel-pagination-wrapper">
        <ol className="carousel-pagination">
          {data.map((_, index) => (
            <li key={index} className={current === index ? "current" : ""} />
          ))}
        </ol>
      </div>
    </NonPassiveTouchTarget>
  );
}

const Container = touchWithMouseHOC(CarouselContainer);

const Carousel = props => {
    const renderCard = (index, modIndex, asd) => {
        const item = data[modIndex];


        return (
            <div key={index} className="carousel-card mx-3"
                onClick={() => console.log(`clicked card ${1 + modIndex}`)}
            >

                <img src={item.src.default}/>
            </div>
        );
    }


    return (
        <TouchCarousel
            component={Container}
            cardSize={cardSize}
            cardCount={data.length}
            cardPadCount={cardPadCount}
            loop={true}
            // autoplay={enableAutoplay ? 2e3 : false}
            renderCard={renderCard}
            onRest={index => console.log(`rest at index ${index}`)}
            onDragStart={() => console.log("dragStart")}
            onDragEnd={() => console.log("dragEnd")}
            onDragCancel={() => console.log("dragCancel")}
        />
    );

}

export default Carousel;
