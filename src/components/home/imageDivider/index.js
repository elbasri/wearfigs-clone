/* eslint-disable @next/next/no-img-element */
import { Placeholder} from 'react-bootstrap'
import Image from 'next/image';
import Link from 'next/link';

const ImageDevider = () =>{
    return (
        <section className='container-fluid d-flex'>
            <div  className='dividerBg xs-12'>
                <div className='image-container'>
                    <img
                    className='img-fluid image-divider'
                    src="https://wearfigs-back.tasyer.com/wp-content/uploads/2022/03/fixedwidthbanner_fulldesktop_Loungewear_M.webp"
                    alt="Our NEW OFF-SHIFT™ LOUNGEWEAR"
                    />
                    <div className='divider-text'>
                        <h1>
                            OFF-SHIFT™, ON-CALL
                        </h1>

                        <p>
                            Our NEW OFF-SHIFT™ LOUNGEWEAR features classic colors,
                            silhouettes and 345GSM recycled poly fleece that’s soft and durable.
                        </p>

                        <Link href='#' >{'Shop Men'}</Link>
                    </div>
                </div>






            </div>
        </section>

    );
}

export default ImageDevider;