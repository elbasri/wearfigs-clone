import SideUnit from './SideUnit';

const SideMenu = () => {
    return (
        <div className="container-fluid mt-3 col-xs-12 col-md-4 col-lg-3 mt-2 sideMenuContainer">
            <div className="pl-2">

                <div className='accordionMenu'>
                    <SideUnit />
                </div>
            </div>
        </div>
    );
}

export default SideMenu;