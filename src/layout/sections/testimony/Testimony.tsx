import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.ts";
import {Icon} from "../../../components/icon/Icon.tsx";
import {Slider} from "../../../components/slider/Slider";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {Container} from "../../../components/Container.ts";
import {S} from "../skills/Skills_Styles.ts"
import React from "react";

export const Testimony:React.FC = () => {
    return (
        <StyledTestimony>
            <Container>
                <SectionTitle>Testimony</SectionTitle>
                    <FlexWrapper direction="column" align="center">
                        <S.IconWrapper>
                            <Icon iconId={"quotes"}/>
                        </S.IconWrapper>
                        <Slider/>
                    </FlexWrapper>
            </Container>
        </StyledTestimony>
    );
};

export const StyledTestimony = styled.section`
    min-height: 100vh;
    
    
    ${S.IconWrapper} {
        margin: 28px 0 72px;
    }
    
`
