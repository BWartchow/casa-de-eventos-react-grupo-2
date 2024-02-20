import { Link } from 'react-router-dom'

import styled from "styled-components";

export const NavbarContainer = styled.div`
    width: calc(100% - 250px);
    height: 120px;
    display: flex;
    justify-content: right;
    align-items: center;
`

export const NavbarList = styled.ul`
    display: flex;
`

export const NavbarItem = styled.li`
    list-style-type: none;
`

export const NavbarLink = styled(Link)`
    color: #E2D8A5;
    text-decoration: none;
    padding: 0 15px;
    &:hover {
        color: #6F9F9C;
    }
`