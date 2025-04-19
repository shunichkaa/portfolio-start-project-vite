import {SectionTitle} from "../../../components/SectionTitle.ts";
import {Button} from "../../../components/Button.ts";
import {Container} from "../../../components/Container.ts";
import {S} from "./Contacts_Styles.ts";
import React, {ElementRef, useRef} from "react";
import emailjs from "@emailjs/browser";

export const Contact: React.FC = () => {
    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current) return;

        emailjs
            .sendForm("service_5cbj1le", "template_kuid8zg", form.current, "0PgjVKx0J40CF1_3m")
            .then(
                () => {
                    console.log("SUCCESS!");
                },
                (error) => {
                    console.log("FAILED...", error.text);
                }
            );
    };

    return (
        <S.Contact id={"contact"}>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <S.Form ref={form} onSubmit={sendEmail}>
                    <S.Field placeholder={"name"} name="name"/>
                    <S.Field placeholder={"subject"} name="subject"/>
                    <S.Field as={"textarea"} placeholder={"message"} name="message"/>
                    <Button type="submit">Send Message</Button>
                </S.Form>
            </Container>
        </S.Contact>
    );
};