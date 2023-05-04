import SideNav, {
    Toggle, 
    NavItem, 
    NavIcon, 
    NavText,
} from "@trendmicro/react-sidenav";
import { useNavigate } from "react-router-dom";

import "@trendmicro/react-sidenav/dist/react-sidenav.css";

function MySideNav() {
    const navigate = useNavigate();
    return (
        <SideNav
            onSelect={selected=>{
                console.log(selected);
                navigate(selected)
            }}
            className='mysidenav'
            expanded={true}
        >
            <SideNav.Nav defaultSelected="/home">
                <NavItem className="nav-item" eventKey="/fly500">
                    <NavIcon><i className='fa-solid fa-sailboat' style={{fontSize: "1.5em" }}></i></NavIcon>
                    <NavText><span className="nav-text">500 FLY</span></NavText>
                </NavItem>
                <NavItem className="nav-item" eventKey="/ht500">
                    <NavIcon><i className='fa-solid fa-sailboat' style={{fontSize: "1.5em" }}></i></NavIcon>
                    <NavText>500 HT</NavText>
                </NavItem>
                <NavItem className="nav-item" eventKey="/ht410">
                    <NavIcon><i className='fa-solid fa-sailboat' style={{fontSize: "1.5em" }}></i></NavIcon>
                    <NavText>410 HT</NavText>
                </NavItem>
                <NavItem className="nav-item" eventKey="/ht370">
                    <NavIcon><i className='fa-solid fa-sailboat' style={{fontSize: "1.5em" }}></i></NavIcon>
                    <NavText>370 HT</NavText>
                </NavItem>
                <NavItem className="nav-item" eventKey="/ht330">
                    <NavIcon><i className='fa-solid fa-sailboat' style={{fontSize: "1.5em" }}></i></NavIcon>
                    <NavText>330 HT</NavText>
                </NavItem>
                <NavItem className="nav-item" eventKey="/ht235">
                    <NavIcon><i className='fa-solid fa-sailboat' style={{fontSize: "1.5em" }}></i></NavIcon>
                    <NavText>235 HT</NavText>
                </NavItem>
            </SideNav.Nav>
        </SideNav>
    );
};

export default MySideNav;
