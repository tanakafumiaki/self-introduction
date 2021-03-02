import styles from './style.module.sass';
import React from "react";
import Image from 'next/image';

interface Props {
    imageSrc?: string
    width?: string
    height?: string
    alt?: string
}

const ImageBox: React.VFC<Props> = ({imageSrc ="/sample.jpg",width="800",height="500",alt= "Picture"}) => {
    return (
        <Image
            src={imageSrc}
            width={width}
            height={height}
            alt={alt}
            className={styles.image}
        />
    )
}
export default ImageBox;
