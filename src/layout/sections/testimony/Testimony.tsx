import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";
import {Slider} from "../../../components/slider/Slider";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Container} from "../../../components/Container.tsx";
import {S} from "../skills/Skills_Styles.ts"

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
