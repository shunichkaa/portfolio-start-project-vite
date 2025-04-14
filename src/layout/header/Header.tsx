import Logo from "../../components/logo/Logo.tsx";
import {Container} from "../../components/Container.ts"
import {FlexWrapper} from "../../components/FlexWrapper.ts";
import {DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu.tsx";
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu.tsx";
import React from "react";
import {S} from "./Header_Styles.ts"


const items = ["Home", "Skills", "Works", "Testimony", "Contact"];

export const Header:React.FC = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
    }, []);


    return (
        <S.Header>
            <Container>
                <FlexWrapper justify="space-between" align="center">
                    <Logo/>

                    {width < breakpoint ? <MobileMenu menuItems={items}/>
                                        : <DesktopMenu menuItems={items} />}

                </FlexWrapper>
            </Container>
        </S.Header>
    );
};

