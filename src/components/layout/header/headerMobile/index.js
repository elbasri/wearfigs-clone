import HeaderMenTab from "./headerMen";
import HeaderWomenTab from "./hederWomen";


const HeaderMobileTabs = ({tab}) => {
    return (<>
                { tab ? <HeaderMenTab /> : <HeaderWomenTab />}
            </>);
}

export default HeaderMobileTabs;