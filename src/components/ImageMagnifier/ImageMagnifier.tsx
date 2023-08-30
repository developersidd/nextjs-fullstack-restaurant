"use client";
import React from 'react';
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

const ImageMagnifier = ({ style, children }: { style: any, children: React.ReactNode }) => {
    return (
        <TransformWrapper smooth={true} >
            <TransformComponent wrapperStyle={style}>
                {children}
            </TransformComponent>
        </TransformWrapper>
    )
}

export default ImageMagnifier