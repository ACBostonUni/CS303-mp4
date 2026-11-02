import Link from "next/link";
import {HeaderStyling, Nav, NavLink, StyledH2} from "../Styles"



export default function Header() {
    return (
        <HeaderStyling>
            <StyledH2>SkyWay</StyledH2>

            <Nav>
                <NavLink href="/">Home</NavLink>
                <NavLink href="/Track">Track A Flight</NavLink>
            </Nav>
        </HeaderStyling>
    );
}