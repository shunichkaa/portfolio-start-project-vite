import {Link} from "../../../../components/Link.tsx";
import {Button} from "../../../../components/Button.tsx";
import React from "react";
import { S } from "../Works_Styles.ts";

type WorkPropsType = {
title: string,
text: string,
src: string
}

export const Work:React.FC<WorkPropsType> = (props: WorkPropsType) => {
    return (
        <S.Work>
            <S.Description>
                <S.ImageWrapper>
                    <S.Image src={props.src} alt=""/>
                    <Button>view project</Button>
                </S.ImageWrapper>
                <S.Title>{props.title}</S.Title>
                <S.Text>{props.text}</S.Text>
                <Link href={"#"}>demo</Link>
                <Link href={"#"}>code</Link>
            </S.Description>
        </S.Work>
    );
};