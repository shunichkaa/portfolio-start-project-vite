import styled from "styled-components";
import {theme} from "../styles/Theme.tsx";

export const Container = styled.div`
    max-width: 1170px;
    width: 100%;
    min-height: 100%;
    padding: 0 15px;
    margin: 0 auto;
    box-sizing: border-box;

    @media ${theme.media.mobile} {
        padding: 0 5px;
        overflow-x: hidden;
    }
`;