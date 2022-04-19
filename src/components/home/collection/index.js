/* eslint-disable @next/next/no-img-element */
import { isArray, isEmpty } from 'lodash';
import Link from 'next/link'


const Collection = ({collections}) => {
    if(isEmpty(collections) || !isArray(collections)){
        return null;
    }
    return(
        <section className="container-fluid collection mb-5">
            <h2>Slim Fits Collection</h2>
            <div className="collection-wrap d-flex">
                    { collections.length ? collections.map(e => {
                        if(!e.image) return null;

                        return(
                            <div className="collection-item" key={e.name}>
                                <Link href="/products"><img src={e.image.src} alt={e.description} /></Link>
                                <div className="collection-text">
                                    <p>{e.name}</p>
                                    <span>{e.description}</span>
                                </div>
                            </div>
                        )}) : null
                    }
            </div>
        </section>
    );
}

export default Collection;