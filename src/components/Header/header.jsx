import HeaderContainer from "./header.styles"

import Logo from "../Logo/logo";
import Navbar from "../Navbar/navbar";

function Header() {
    return (
        <HeaderContainer>
            <Logo />
            <Navbar />
        </HeaderContainer>
    )
}

export default Header