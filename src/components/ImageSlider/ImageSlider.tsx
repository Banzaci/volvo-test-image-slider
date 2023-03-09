import React, { useEffect, useRef, useState } from "react";
import { Block, Flex } from "vcc-ui";
import Icon from "../Icon/Icon";
import IconButton from "../Button/IconButton"
import styles from "./ImageSlider.module.css"

const ImageSlider = ({ children }: { children:  React.ReactNode }) => {
  const imageSliderRef = useRef<HTMLDivElement>(null);
  const [imageSliderWidth, setImageSliderWidth] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lengthOfChildren, setLengthOfChildren] = useState(0);

  useEffect(() => {
    if (imageSliderRef.current) {
      const childNodeLength = imageSliderRef.current.childNodes.length;
      setLengthOfChildren(childNodeLength);
      setImageSliderWidth(Math.ceil(imageSliderRef.current.scrollWidth / childNodeLength));
    }
  }, [children])
  
  const onChangeImage = (index: number) => {
    if (!imageSliderRef.current) return;
    imageSliderRef.current.scrollTo({
      left: (index * imageSliderWidth),
      behavior: 'smooth',
    })
    setCurrentImageIndex(index);
  }

  const onScrollHandler = (direction: 'left' | 'right') => {
    if (!imageSliderRef.current) return;
    const back = direction === 'left';
    const { scrollLeft, scrollWidth } = imageSliderRef.current;
    const index = back ? currentImageIndex - 1 : currentImageIndex + 1;
    if (index !== -1 && index <= lengthOfChildren) {
      const endPosition = back ? 0 : scrollWidth;
      const left = scrollLeft < scrollWidth ? (index * imageSliderWidth) : endPosition;
      imageSliderRef.current.scrollTo({
        left,
        behavior: 'smooth',
      })
      setCurrentImageIndex(index);
    }
  }

  const Dot = (index:number) => (
    <div
      key={index}
      aria-label={`Circle ${index}`}
      className={styles.dot}
      { ...(index === currentImageIndex) && { style: { backgroundColor: 'black' }}}
      onClick={() => onChangeImage(index)}
    />
  );

  return (
    <Block extend={{ margin: '0 20px' }}>
      <Flex extend={{ flexDirection: 'row', overflowX: 'auto' }} ref={imageSliderRef}>
        {children}
      </Flex>
      <Flex extend={{
        flexDirection: 'row',
        marginTop: 20,
        justifyContent:'center',
        '@media (min-width: 480px)': {
          display: 'none',
        },
      }}
      >
        {[...Array(lengthOfChildren).keys()].map(Dot)}
      </Flex>
      <Flex extend={{
        display: 'none',
        '@media (min-width: 480px)': {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
        },
        }}>
        <IconButton onClick={() => onScrollHandler('left')} ariaLabel="Next button">
          <Icon
            src="/images/chevron-circled.svg"
            alt="Left button"
            flip
          />
        </IconButton>
        <IconButton onClick={() => onScrollHandler('right')} ariaLabel="Previous button">
          <Icon src="/images/chevron-circled.svg" alt="Right button" />
        </IconButton>
      </Flex>
    </Block>
  )
}

export default ImageSlider
