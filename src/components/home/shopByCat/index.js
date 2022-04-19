/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { isArray, isEmpty } from 'lodash';

const ShopByCat = ({categories}) => {
  if(isEmpty(categories) || !isArray(categories)){
    return null;
}

    const responsive={
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024
          },
          items: 3,
          partialVisibilityGutter: 40
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0
          },
          items: 1,
          partialVisibilityGutter: 30
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464
          },
          items: 2,
          partialVisibilityGutter: 30
        }
      }

    const cats = categories.map( e => {
        if (e.image)
            return (<div key={e.id}>
                        <img src={e.image.src} alt={e.slug}/>
                    </div>);
        return null;
    } );

    return(
        <div className="container-fluid shopByCat">
            <h2>Shop By Category</h2>
                <Carousel
                    responsive={responsive}
                    itemClass='slideClass'
                    arrows
                    autoPlaySpeed={3000}
                    centerMode={true}
                    draggable
                    focusOnSelect={false}
                    infinite
                    keyBoardControl
                    minimumTouchDrag={80}
                    >
                    {
                    categories.length ? categories.map( e => {
                          if (e.image)
                              return (<div key={e.id}>
                                          <img src={e.image.src} alt={e.slug}/>
                                      </div>);
                          return null;
                      } ): null
                    }
                </Carousel>
        </div>
    );
}

export default ShopByCat;