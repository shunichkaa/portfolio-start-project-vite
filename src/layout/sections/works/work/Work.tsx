import {Link} from "../../../../components/Link.ts";
import {Button} from "../../../../components/Button.ts";
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
                <Link active>demo</Link>
                <Link>code</Link>
            </S.Description>
        </S.Work>
    );
};