import Link from "next/link";
import styled from "styled-components";

const HeaderStyling = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10%;
`;

const StyledH2 = styled.h2`
    font-size: 225%;
    font-weight: 600;
    padding: 1%;
    
    @media screen and (max-width: 800px) {
        
        font-size: 150%;
        
    }
`;

const Nav = styled.nav`
    padding: 0.5%;
    margin: 1%;
    width: 50%;
    text-align: right;
`;

const NavLink = styled(Link)`
    padding: 1%;
    margin: 1%;
    font-size: 125%;
    

    @media screen and (max-width: 800px) {

        font-size: 100%;

    }

    &:hover {
        text-decoration: underline;
    }
`;

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