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
                const path = selected ? '/home' + selected : '';
                navigate(path)
            }}
            className='mysidenav'
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="/home">
                    <NavItem eventkey="/home">
                        <NavIcon><i className='fa fa-fw fa-home' style={{fontSize: "1.5em" }}></i></NavIcon>
                        <NavText>Home</NavText>
                    </NavItem>
                    <NavItem eventkey="/messages">
                        <NavIcon><i className='fa fa-fw fa-message' style={{fontSize: "1.5em" }}></i></NavIcon>
                        <NavText>Messages</NavText>
                    </NavItem>
                    <NavItem eventkey="/settings">
                        <NavIcon><i className='fa fa-fw fa-solid fa-gear' style={{fontSize: "1.5em" }}></i></NavIcon>
                        <NavText>Settings</NavText>
                    </NavItem>
                    <NavItem eventkey="/charts">
                        <NavIcon><i className='fa fa-fw fa-line-chart' style={{fontSize: "1.5em" }}></i></NavIcon>
                        <NavText>Charts</NavText>
                        <NavItem eventkey="/new-users">
                            <NavText>New Users</NavText>
                        </NavItem>
                        <NavItem eventkey="/revenue">
                            <NavText>Revenue</NavText>
                        </NavItem>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
    );
};

export default MySideNav;