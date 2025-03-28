import Logo from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import styled from "styled-components";


export const Header = () => {
    return (
        <StyledHeader>
        <Logo/>
        <Menu/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: rgba(160, 251, 63, 0.43);
    display: flex;
    justify-content: space-between;
`