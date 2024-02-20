import { NavbarContainer, NavbarList, NavbarItem, NavbarLink } from "./navbar.styles"

function Navbar() {
    return (
        <NavbarContainer>
            <NavbarList>
                <NavbarItem>
                    <NavbarLink to="/homepage">Homepage</NavbarLink>
                </NavbarItem>
                <NavbarItem>
                    <NavbarLink to="/contact">Contact</NavbarLink>
                </NavbarItem>
            </NavbarList>
        </NavbarContainer>
    )
}
export default Navbar