/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";


 const CarouselHelper =({arr,color}) =>
  {
      return (
                <div
                    style={{
                        paddingBottom: '30px',
                        position: 'relative'
                    }}
                    >
                    <Carousel
                        additionalTransfrom={0}
                        arrows
                        autoPlaySpeed={3000}
                        centerMode={false}
                        className=""
                        containerClass="container"
                        dotListClass=""
                        draggable
                        focusOnSelect={false}
                        infinite
                        itemClass=""
                        keyBoardControl
                        minimumTouchDrag={80}
                        renderButtonGroupOutside={false}
                        renderDotsOutside
                        responsive={{
                        mobile: {
                            breakpoint: {
                            max: 1800,
                            min: 0
                            },
                            items: 1
                        }
                        }}
                        showDots
                        sliderClass=""
                        slidesToSlide={1}
                        swipeable
                    >
                        <img
                        src={arr[color]}
                        style={{
                            display: 'block',
                            height: '100%',
                            margin: 'auto',
                            width: '100%'
                        }}
                        />
                        <img
                        src={arr[color]}
                        style={{
                            display: 'block',
                            height: '100%',
                            margin: 'auto',
                            width: '100%'
                        }}
                        />
                        <img
                        src={arr[color]}
                        style={{
                            display: 'block',
                            height: '100%',
                            margin: 'auto',
                            width: '100%'
                        }}
                        />
                        <img
                        src={arr[color]}
                        style={{
                            display: 'block',
                            height: '100%',
                            margin: 'auto',
                            width: '100%'
                        }}
                        />
                        <img
                        src={arr[color]}
                        style={{
                            display: 'block',
                            height: '100%',
                            margin: 'auto',
                            width: '100%'
                        }}
                        />
                    </Carousel>
                </div>
    )
};

export default CarouselHelper;