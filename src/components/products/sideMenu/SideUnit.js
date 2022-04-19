import { useState, useEffect } from "react";
import classnames from "classnames";
import SideDesktop from "./SideDesktop";
import SideMobile from "./sideMobile";



const SideUnit = () => {
    // filter values
    const [color,setColor] = useState([]);
    const [fit,setFit] = useState([]);
    const [size,setSize] = useState([]);
    const [productType,setProductType] = useState([]);
    // filter display toggle
    const displayFilter = {
        colorFilter : false,
        fitFilter : false,
        sizeFilter: false,
        productTypeFilter: false
    }
    const [display, setDisplay] = useState(displayFilter);

    const toggleFilter = ( e ) => {
        display[e] = !display[e]
        setDisplay({...display ,display});
    }

    // filter actions
    const [filter, setFilter] = useState([]);
    const [clear, setClear] = useState(0);

    const addFilter = (e) => {
        if(filter.includes(e)){
            setClear(--clear)
            setFilter(filter.filter( i => i !== e ));
            return;
        }
        setClear(++clear)
        setFilter([...filter, e]);
    }

    const [displayDiv, setDisplayDiv] = useState(undefined);



    const detectSize = () => {

        if(window.innerWidth > 810){
            setDisplayDiv(false);
        }else{
            setDisplayDiv(true)
        }
      }

    useEffect(() => {

        window.addEventListener('resize', detectSize);
        return () => {
            window.removeEventListener('resize', detectSize)
          }

      },[displayDiv]);
    useEffect(() => {

        window.addEventListener("load", ()=>{
            console.log(window.innerWidth);
            detectSize();
            });
      });

    useEffect(() => detectSize());

    return (<>{
                !displayDiv ? <SideDesktop
                    display={display}
                    filter={filter}
                    clear={clear}
                    addFilter={addFilter}
                    toggleFilter={toggleFilter}
                /> :
                <SideMobile
                    display={display}
                    filter={filter}
                    clear={clear}
                    addFilter={addFilter}
                    toggleFilter={toggleFilter}
                />
            }</>);

}

export default SideUnit;