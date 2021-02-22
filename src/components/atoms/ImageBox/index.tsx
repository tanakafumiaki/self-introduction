import styles from './style.module.sass';
import React from "react";
import Image from 'next/image';

const ImageBox: React.VFC = () => {
    return (
        <Image
            src="/sample.jpg"
            width="200"
            height="200"
            alt="picture"
            className={styles.image}
        />
    )
}
export default ImageBox;
