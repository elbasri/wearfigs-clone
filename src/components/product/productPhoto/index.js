/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import CarouselHelper from "./CarouselHelper";
import ImageGallery from 'react-image-gallery';


const ProductPhoto = ({ImageArr}) => {
    const arr2 = ImageArr.map( (e,i) => ({original : e.src , thumbnail: e.src , originalWidth : "calc(100%)" }) );
    const imageGrid = (
                    <>
                        <section className="col-12 col-sm-12 col-md-8 col-lg-8 product-photo my-5">
                            <ImageGallery
                                 infinite={true}
                                 showPlayButton={false}
                                 showBullets={false}
                                 thumbnailPosition='left'
                                 items={arr2}/>
                        </section>
                    </>);

    const [display, setDisplay] = useState(undefined);



    const detectSize = () => {

        if(window.innerWidth > 810){
            setDisplay(false);
        }else{
            setDisplay(true)
        }
      }

    useEffect(() => {

        window.addEventListener('resize', detectSize);
        return () => {
            window.removeEventListener('resize', detectSize)
          }

      },[display]);
    useEffect(() => {
        window.addEventListener("load", ()=>{
            console.log(window.innerWidth);
            detectSize();
        });



      },[]);

    return(<>{ !display ? imageGrid : <CarouselHelper arr={arr} color={color} /> }</>);
}

export default ProductPhoto;