import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";
import {Slider} from "../../../components/slider/Slider";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <SectionTitle>Testimony</SectionTitle>
            <Icon iconId={"quotes"}/>
            <Slider/>
        </StyledTestimony>
    );
};

export const StyledTestimony = styled.section`
min-height: 100vh;
`