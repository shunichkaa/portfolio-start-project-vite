import { Icon } from "../../../../components/icon/Icon.tsx";
import { FlexWrapper } from "../../../../components/FlexWrapper.tsx";
import { S } from "../Skills_Styles.ts";
import React from "react";


type SkillPropsType = {
    iconId: string;
    title: string;
    description: string;
}

export const Skill:React.FC<SkillPropsType> = (props: SkillPropsType) => {
    return (
        <S.Skill>
            <FlexWrapper direction="column" align="center">
                <S.IconWrapper>
                    <Icon iconId={props.iconId}/>
                </S.IconWrapper>
                <S.SkillTitle>{props.title}</S.SkillTitle>
                <S.SkillText>{props.description}</S.SkillText>
            </FlexWrapper>
        </S.Skill>
    );
};