import { isEmpty } from "lodash";
import { colorValue } from "../../../utils/colors";



const ColorItem = ({colors , selectedColor , setSelectedColor}) => {



    return(<div style={{
                display: 'flex',
                flexWrap: 'wrap'
            }}>

            { colors && colors.length ? colors.map((e)=>
                <div key={e}>
                    <div className="filterColor mt-1 mb-1">
                        <label className='d-flex' style={{cursor: 'pointer '}}>
                                <input className='colorInput' type="checkbox" aria-checked="false" value={e}  onClick={() => setSelectedColor(e)}/>
                                <div className="colorSwatchOuter" id={selectedColor === e ? 'colorSwatcherActive':null}>
                                    <div className="colorSwatch"style={{ backgroundColor: colorValue[e]['background']}}>
                                    </div>
                                </div>
                         </label>
                        </div>
                </div>
                ):
                 null}
           </div>)

}

export default ColorItem;