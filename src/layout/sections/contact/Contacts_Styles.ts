import styled from "styled-components";
import { theme } from "../../../styles/Theme";

const Contact= styled.section`
position: relative;
`

const Form= styled.form`
    max-width: 540px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin: 0 auto;
    
    textarea {
        resize: none;
        height: 155px;
    }
`

const Field= styled.input`
    width: 100%;
    border: 1px solid ${theme.colors.borderColor};
    background: ${theme.colors.secondaryBg};
    padding: 7px 15px;

    font-family: Poppins, sans-serif;  
    font-weight: 400;
    font-size: 12px;
    letter-spacing: 0.05rem;
    color: ${theme.colors.font};
    
    &::placeholder {
        color: ${theme.colors.placeholderColor};
        text-transform: capitalize;
    }
    
    &:focus-within {
        outline: 1px solid ${theme.colors.borderColor};
    }

`

export const S = {
    Contact,
    Form,
    Field
}