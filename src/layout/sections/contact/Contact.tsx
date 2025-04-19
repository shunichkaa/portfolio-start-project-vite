import {SectionTitle} from "../../../components/SectionTitle.ts";
import {Button} from "../../../components/Button.ts";
import {Container} from "../../../components/Container.ts";
import { S } from "./Contacts_Styles.ts";
import React from "react";


export const Contact:React.FC = () => {
    return (
        <S.Contact id={"contact"}>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <S.Form>
                    <S.Field placeholder={"name"}/>
                    <S.Field placeholder={"subject"}/>
                    <S.Field as={"textarea"} placeholder={"message"}/>
                    <Button type="submit">Send Message</Button>
                </S.Form>
            </Container>
        </S.Contact>
    );
};
