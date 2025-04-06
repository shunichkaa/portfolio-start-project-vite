import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";
import {Slider} from "../../../components/slider/Slider";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {IconWrapper} from "../skills/skill/Skill.tsx";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <SectionTitle>Testimony</SectionTitle>
                <FlexWrapper direction="column" align="center">
                    <IconWrapper>
                        <Icon iconId={"quotes"}/>
                    </IconWrapper>
                    <Slider/>
                </FlexWrapper>
        </StyledTestimony>
    );
};

export const StyledTestimony = styled.section`
    min-height: 100vh;
    
    
    ${IconWrapper} {
        margin: 52px 0 72px;
    }
    
`
