import React, {useState} from "react";
import {Menu} from "../menu/Menu.tsx";
import { S } from "../HeaderMenu_Styles.ts";


export const MobileMenu: React.FC<{menuItems: Array<string> }> = (props: {menuItems: Array<string> }) => {
    const [menuIsOpen, setmenuIsOpen] = useState(false)
    const onBurgerBtnClick = () => {setmenuIsOpen(!menuIsOpen)}
    return (
        <S.StyledMobileMenu>
            <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </S.BurgerButton>

            <S.MobileMenuPopup isOpen={menuIsOpen} onClick={()=>{setmenuIsOpen(false)}}>
                <Menu menuItems={props.menuItems} />
            </S.MobileMenuPopup>
        </S.StyledMobileMenu>
    );
};
