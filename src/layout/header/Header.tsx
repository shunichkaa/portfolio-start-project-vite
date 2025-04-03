import Logo from "../../components/logo/Logo.tsx";
import styled from "styled-components";
import {Container} from "../../components/Container.tsx"
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {HeaderMenu} from "./headerMenu/HeaderMenu.tsx";

export const items = ["Home", "Skills", "Works", "Testimony", "Contact"];

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify="space-between" align="center">
                    <Logo/>
                    <HeaderMenu menuItems={items} />
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: rgba(31, 31, 32, 0.9);
    padding: 20px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
    
`