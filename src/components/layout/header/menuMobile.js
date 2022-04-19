import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faXmark
  } from "@fortawesome/free-solid-svg-icons";
import HeaderMobileTabs from './headerMobile';
import {useState} from 'react' ;

const MenuMobile = ({handleClose}) => {
    const [tab,setTab] = useState(false);
    return(<div className="menuMobile">
                <div className="menuHeader d-flex mt-4">
                    <div className="xmark" onClick={handleClose}>
                        <FontAwesomeIcon icon={faXmark} size="1x"/>
                    </div>
                    <div
                        className="HeadOptions"
                        id={tab ? 'selectedHead' : null}
                        onClick={()=>setTab(true)}
                        >Men</div>
                    <div
                     className="HeadOptions"
                     id={!tab ? 'selectedHead' : null}
                     onClick={()=>setTab(false)}
                     >Women</div>
                </div>
                <HeaderMobileTabs tab={tab} />
            </div>);
}

export default MenuMobile;