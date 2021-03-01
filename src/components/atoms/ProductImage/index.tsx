import styles from './style.module.sass';
import React from "react";
import Image from 'next/image';

interface Props {
    imageSrc: string
}

const ImageBox: React.VFC<Props> = ({imageSrc}) => {
    return (
        <Image
            src={imageSrc}
            width="800"
            height="500"
            alt="picture"
            className={styles.image}
        />
    )
}
export default ImageBox;
