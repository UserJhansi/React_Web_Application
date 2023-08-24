import React from "react";
import { Nav, NavLink, NavMenu } from './NavbarElements';
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    
                    <NavLink to="/Page_1" activeStyle> Web Page_1 </NavLink>
                    <NavLink to="/Page_2" activeStyle> Web Page_2 </NavLink>
                    <NavLink to="/Page_3" activeStyle> Web Page_3 </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;