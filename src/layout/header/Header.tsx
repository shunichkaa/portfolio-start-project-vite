import Logo from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import styled from "styled-components";

export const items = ["Home", "Skills", "Works", "Testimony", "Contact"];

export const Header = () => {
    return (
        <StyledHeader>
        <Logo/>
        <Menu menuItems={items} />
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: rgba(160, 251, 63, 0.43);
    display: flex;
    justify-content: space-between;
`