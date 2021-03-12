import styles from './style.module.sass';
import React from "react";
import Image from 'next/image';

const ImageBox: React.VFC = () => {
    return (
        <Image
            src="/profile-picture.jpg"
            width="200"
            height="300"
            alt="picture"
            className={styles.image}
        />
    )
}
export default ImageBox;
