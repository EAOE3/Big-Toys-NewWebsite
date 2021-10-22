import {useEffect, useRef, useState, Fragment, Component} from "react";
import data from "./data";
import cx from "classnames";
import NonPassiveTouchTarget from "./NonPassiveTouchTarget";
import TouchCarousel, { clamp } from "react-touch-carousel";
import touchWithMouseHOC from "react-touch-carousel/lib/touchWithMouseHOC";
import './carousel.scss';

const cardSize = window.innerWidth > 769 ? 400 : 200;
const cardPadCount = 4;
const carouselWidth = window.innerWidth;




function CarouselContainer (props) {
  const { cursor, carouselState: { active, dragging }, ...rest } = props
  let current = -Math.round(cursor) % data.length
  while (current < 0) {
    current += data.length
  }
  // Put current card at center
  const translateX = (cursor - cardPadCount) * cardSize + (carouselWidth - cardSize) / 2
  return (
    <NonPassiveTouchTarget
      className={cx(
        'carousel-container',
        {
          'is-active': active,
          'is-dragging': dragging
        }
      )}
    >
      <NonPassiveTouchTarget
        className='carousel-track'
        style={{ transform: `translate3d(${translateX}px, 0, 0)` }}
        {...rest}
      />

      <div className='carousel-pagination-wrapper'>
        <ol className='carousel-pagination'>
          {data.map((_, index) => (
            <li
              key={index}
              className={current === index ? 'current' : ''}
            />
          ))}
        </ol>
      </div>
    </NonPassiveTouchTarget>
  )
}

const Container = touchWithMouseHOC(CarouselContainer)

class Carousel extends Component {
  renderCard (index, modIndex) {
    const item = data[modIndex]
    return (
      <div
        key={index}
        className='carousel-card p-4'
      >

        <img id={`img${index}`} src={item.src.default} className="img_"/>
      </div>
    )
  }

  setCurrent(i){
      const current = document.querySelector('.img_.current');
      if(current != null)
        current.classList.remove('current');

        const newCurrent = document.querySelector('#img'+i);
        newCurrent.classList.add('current');
  }

  render () {
    return (

        <TouchCarousel
          component={Container}
          cardSize={cardSize}
          cardCount={data.length}
          cardPadCount={cardPadCount}
          loop
          autoplay={2e3}
          renderCard={this.renderCard}
          onRest={index => this.setCurrent(index)}

        />

    )
  }
}

export default Carousel;
