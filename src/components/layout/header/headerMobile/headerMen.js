import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faXmark,
    faAngleUp,
    faAngleDown,
  } from "@fortawesome/free-solid-svg-icons";
import {useState} from 'react';

const HeaderMenTab = () => {
    const [ displayFilter, setDisplayFilter] = useState(false);

    const displayFilterHandler = () => {

        setDisplayFilter(!displayFilter);

    }

    const filters = {
        colorFilter: false,
        scrub: false,
        outwear: false,
        apparel: false,
        necessities: false,
        footwear: false,
        shopByColor: false,
        shopBystyle: false,
        account: true

    }
    const data = [
        {'Scrubs': [
            {"Scrub Tops": { link: ""}},
            {"Scrub Pants": { link: ""}},
            {"Joggers": { link: ""}},
            {"Core Scrubs":{ link: ""}},
            {"All Scrubs": { link: ""}},
/*             {"Core Scrubs": { link: ""}},
            {"Maternity": { link: ""}},
            {"All Scrubs": { link: ""}}, */
            ],
            filter: 'scrub'
        },
        {
            'Outerwear':[
                {'Jackets & Vests': {link : ''}}
            ],
            filter: 'outwear'
        },
        {
            'Apparel': [

                    {'Underscrubs': {link: ""}},
                    {'Performance Underscrubs': {link:''}},
                    {'Loungewear': {link: ''}},
                    {'Lab Coats': {link: ''}},
                    {'Core Apparel': {link:''}},

            ],
            filter: 'apparel'
        },
        {
            'Necessities':[
                {'Socks':{link: ''}},
                {'Scrub Caps':{link: ''}},
                {'Face Masks & Shields':{link: ''}},
                {'Gift Cards':{link: ''}},
                {'All Necessities':{link: ''}},
            ],
            filter: 'necessities'
        },
        {
            "Footwear": [
                {'FIGS | New Balance': {link: ''}}
            ],
            filter: 'footwear'
        },
        {
            'Shop by Color': [
                {'Night Sky': {link: '', color: '' }},
                {'Black': {link: '', color: '' }},
                {'Navy': {link: '', color: '' }},
                {'Dark Moss': {link: '', color: '' }},
                {'Ceil Blue': {link: '', color: '' }},
                {'Graphite': {link: '', color: '' }},
                {'Royal Blue': {link: '', color: '' }},
                {'Burgundy': {link: '', color: '' }},
            ],
            filter: 'colorFilter'
        }
    ]
    const [display, setDisplay ] = useState(filters);

    const toggleFilter = (e) => {
        display[e] = !display[e]
        setDisplay({...display ,display});
    }


    return (<div className='filterTabClass'>
                    <div className="categoriesTab m-4">
                            <ul className="list-unstyled">
                                <li className="my-3">Men&apos;s Home</li>
                                <li className="my-3">Night Sky</li>
                                <li className="my-3">Kits</li>
                                <li className="my-3">Best Sellers</li>
                                <li className="my-3">Core Collection</li>
                                <li className="my-3">New Arrivals</li>
                            </ul>
                    </div>
                    <div className="categoriesFilter">

                        {
                            data.map((e) => {
                                if(Object.keys(e)[0] !== 'Shop by Color'){
                                    return (  <div key={Object.keys(e)[0]}>
                                                <div className="filter"  >
                                                <div className="filterTitle px-4" onClick={ () => toggleFilter(e.filter)}>
                                                    <h3> {Object.keys(e)[0]}{display[e.filter]}</h3>
                                                    <div className="filterIcon" >
                                                        {!display[e.filter]? <FontAwesomeIcon icon={faAngleDown} size="1x"/>: <FontAwesomeIcon icon={faAngleUp} color="#282828" size="1x"/>}
                                                    </div>
                                                </div>
                                                <div className={!display[e.filter] ? 'filterContent' : 'filterContent contentShow px-5'} >
                                                     <ul  className="list-unstyled">
                                                      { e[Object.keys(e)[0]].map((i) => {
                                                        let item = Object.keys(i)[0]
                                                            return(
                                                                            <li className='menuItemMobile my-2' key={item}>{item}</li>
                                                                )
                                                        })
                                                        }
                                                        </ul>

                                                    </div>
                                                 </div>
                                                </div>
                                    );
                                }
                            })
                        }


                         <div className="filter">
                                    <div className="filterTitle px-4" onClick={ () => toggleFilter('colorFilter')}>
                                        <h3> Color </h3>
                                        <div className="filterIcon">
                                            {!display.colorFilter ? <FontAwesomeIcon icon={faAngleDown} size="1x"/>: <FontAwesomeIcon icon={faAngleUp} color="#282828" size="1x"/>}
                                        </div>
                                    </div>
                                    <div className={!display.colorFilter ? 'filterContent' : 'filterContent contentShow px-5'} >
                                        <div className="filterColor mt-1 mb-1">
                                        <label className='d-flex'>
                                            <input className='colorInput' type="checkbox" aria-checked="false" value={'black'} />
                                            <div className="colorSwatchOuter">
                                                <div className="colorSwatch">
                                                </div>
                                            </div>
                                            <div className="colorName"> black </div>
                                        </label>
                                        </div>
                                    </div>
                        </div>

                    </div>

            </div>
            );
}

export default HeaderMenTab;