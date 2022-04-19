import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleUp,
    faAngleDown,
    faXmark
  } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';


const SideMobile = ({display,filter,addFilter,clear,toggleFilter}) => {

    const [ displayFilter, setDisplayFilter] = useState(false);

    const displayFilterHandler = () => {

        setDisplayFilter(!displayFilter);

    }

    return(<>
            <div className='filterProductsMobile'>
                <button className='btn btn-outline-dark' onClick={displayFilterHandler}> Filter</button>
                <div className={displayFilter ?  'filterOverlay myFilterOn': 'filterOverlay myFilterOff'}>
                    <div className='filtrOverlayContent'>
                    <>
                        <div className="filtersContainer">
                        <div className='filter'>
                            <div className='filterTitle'>
                                 <h3 className='filterTitle'>
                                    Filter
                                </h3>
                                <FontAwesomeIcon icon={faXmark} size="1x" onClick={displayFilterHandler}/>
                            </div>


                        </div>

                        <div className="filter">
                            <div className="filterTitle" onClick={ () => toggleFilter('colorFilter')}>
                                <h3> Color </h3>
                                <div className="filterIcon">
                                    {!display.colorFilter ? <FontAwesomeIcon icon={faAngleDown} size="1x"/>: <FontAwesomeIcon icon={faAngleUp} color="#282828" size="1x"/>}
                                </div>
                            </div>
                            <div className={!display.colorFilter ? 'filterContent' : 'filterContent contentShow'} >
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
                        <div className="filter">
                            <div className="filterTitle" onClick={ () => toggleFilter('productFilter')}>
                                <h3> Product Type </h3>
                                <div className="filterIcon">
                                    {!display.productFilter ? <FontAwesomeIcon icon={faAngleDown} size="1x"/>: <FontAwesomeIcon icon={faAngleUp} color="#282828" size="1x"/>}
                                </div>
                            </div>
                            <div className={!display.productFilter ? 'filterContent' : 'filterContent contentShow'} >
                                <div>
                                    <label className="filterOption">
                                        <input type="checkbox" value="Outerwear" onClick={() => addFilter('outwear')} />
                                        <div className="optionText">Outerwear</div>
                                    </label>
                                </div>
                                <div>
                                    <label className="filterOption">
                                        <input type="checkbox" value="Kits" onClick={() => addFilter('kits')}/>
                                        <div className="optionText">Kits</div>
                                    </label>
                                </div>
                                <div>
                                    <label className="filterOption">
                                        <input type="checkbox" value="Scrub Jacket" onClick={() => addFilter('scrub')}/>
                                        <div className="optionText">Scrub Jacket</div>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="filter">
                            <div className="filterTitle" onClick={ () => toggleFilter('fitFilter')}>
                                <h3> Fit </h3>
                                <div className="filterIcon">
                                    {!display.fitFilter ? <FontAwesomeIcon icon={faAngleDown} size="1x"/>: <FontAwesomeIcon icon={faAngleUp} color="#282828" size="1x"/>}
                                </div>
                                </div>
                            <div className={!display.fitFilter ? 'filterContent' : 'filterContent contentShow'} > hello world</div>
                        </div>
                        <div className="filter">
                            <div className="filterTitle" onClick={ () => toggleFilter('sizeFilter')}>
                                <h3> Size  </h3>
                                <div className="filterIcon">
                                    {!display.sizeFilter ? <FontAwesomeIcon icon={faAngleDown} size="1x"/>: <FontAwesomeIcon icon={faAngleUp} color="#282828" size="1x"/>}
                                </div>
                            </div>
                            <div className={!display.sizeFilter ? 'filterContent' : 'filterContent contentShow'} > hello world</div>
                        </div>




                    </div>
                    </>
                    </div>
                </div>
            </div>
            </>);

}

export default SideMobile;