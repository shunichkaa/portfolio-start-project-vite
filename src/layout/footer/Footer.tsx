import {Icon} from "../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.ts";
import { S } from "./Footer_Styles.ts";
import React from "react";

const socialItemsData = [
    {
        iconId: "inst",
    },
    {
        iconId: "telegram",
    },
    {
        iconId: "linkIn",
    }
]


export const Footer:React.FC = () => {
    return (
        <S.Footer>
            <FlexWrapper direction="column" align="center">
                <S.Name>Aleksandra</S.Name>
                    <S.SocialList>
                        {socialItemsData.map((s, index) => {
                           return(
                            <S.SocialItem key={index}>
                                    <S.SocialLink>
                                        <Icon height={"21px"}
                                              width={"21px"}
                                              viewBox={"0 0 21 21"}
                                              iconId={s.iconId}/>
                                    </S.SocialLink>
                            </S.SocialItem>)
                        })}
                </S.SocialList>
                <S.CopyRight>© 2025 Aleksandra Mate, All Rights Reserved.</S.CopyRight>
            </FlexWrapper>
        </S.Footer>
    );
};