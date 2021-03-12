import {ProductImage, TextBox} from "components/atoms";
import styles from './style.module.sass';
import React from "react";

interface Props {
    imageSrc: string
    width?: string
    height?: string
    alt?: string
    url: string
    outline: string
}

const ProductBox: React.VFC<Props> = ({imageSrc,width,height,alt,url,outline}) => {
    return (
        <section className={styles.section}>
            <div className={styles.image}>
                <ProductImage
                    imageSrc={imageSrc}
                    width={width}
                    height={height}
                    alt={alt}
                />
            </div>

            <div className={styles.url}>
                {url}
            </div>

            <div className={styles.outLine}>
                {outline}
            </div>
        </section>
    )
}
export default ProductBox;
