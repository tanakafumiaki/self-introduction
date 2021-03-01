import styles from './style.module.sass';
import React from "react";
import Image from 'next/image';

const ImageBox: React.VFC = () => {
    return (
        <Image
            src="/introduction.gif"
            width="700"
            height="500"
            alt="picture"
            className={styles.image}
        />
    )
}
export default ImageBox;
